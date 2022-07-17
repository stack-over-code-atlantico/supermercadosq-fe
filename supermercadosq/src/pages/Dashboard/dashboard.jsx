import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom';
import { CardsDashboard } from '../../components/CardsDashboard';
import { CardSection } from '../../components/CardsDashboard/styles';
import ChartDashboard from '../../components/ChartDashboard';
import InfoDashboard from '../../components/InfoDashboard';
import SidebarDashboard from '../../components/SidebarDashboard';
import { TableDashboard } from '../../components/TableDashboard';
import { TableDiv } from '../../components/TableDashboard/style';
import { getAllComments } from '../../services/useComments';
import { getAllProducts }  from '../../services/useProducts';
import { BackButton, DivDashboard } from './style';
import { updateComplaint } from '../../services/useReport';

function Dashboard() {
  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState(null);
  const [reports, setReports] = useState([]);
  const [isPost, setIsPost] = useState(true);
  const [isComment, setIsComment] = useState(true);
  const [updatedTable, setUpdatedTable] = useState(false);
  const [quantity, setQuantity] = useState({
    posts: 0,
    comments: 0,
  });

  const handlePostFilter = () => {
    setIsPost(!isPost);
    setIsComment(true);
  };

  const handleCommentFilter = () => {
    setIsComment(!isComment);
    setIsPost(true);
  };

  const handleUpdate = useCallback(async (item) => {
    const updated = await updateComplaint(item)
      .then(() => setUpdatedTable(!updatedTable))
      .catch((err) => {
        alert('Houve um erro com a requisição.');
      });
      return updated;
  });

  const renderInfoCharts = (
    data,
    value,
    type,
    primaryColor,
    secondaryColor,
    size
  ) => {
    if (data) {
      return (
        <InfoDashboard
          size={size}
          title={type}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          value={value}
          fontSize={size / 16.67}
          marginTop={10}
        />
      );
    }
    return <></>;
  };

  useEffect(() => {
    (async () => {
      const allComments = await getAllComments();
      const allPosts = await getAllProducts();
      setPosts(allPosts.data);
      setComments(allComments.data);
      setReports([
        allPosts.data.filter((item) => item.status === 'ANALISE'),
        allComments.data.filter((item) => item.status === 'ANALISE')
      ]);
      setQuantity((prev) => ({ ...prev, comments: allComments.data.filter((item) => item.status === 'ANALISE').length}))
      setQuantity((prev) => ({ ...prev, posts: allPosts.data.filter((item) => item.status === 'ANALISE').length}))
    })()
  }, [updatedTable]);

  return (
    <DivDashboard>
      <SidebarDashboard
        handlePost={handlePostFilter}
        handleComment={handleCommentFilter}
        hasPost={isPost}
        hasComment={isComment}
      />
      <CardSection>
        {
          isPost
            ? (
                <CardsDashboard width='200px' title='Total de Postagens ativas'>
                    {renderInfoCharts(posts, posts ? posts.length : 0, 'Postagens', '#8E5BD0', '#692ABA', 200)}
                </CardsDashboard>
              )
            : (<></>)
        }
        {
          isComment
            ? (
                <CardsDashboard width='200px' title='Total de Comentários ativos'>
                  {renderInfoCharts(comments, comments ? comments.length : 0, 'Comentários', '#692ABA', '#3C166D', 200)}
                </CardsDashboard>
            ) : (<></>)
        }
        <CardsDashboard width='25%' title='Denúncias' minWidth="420px">
          <ChartDashboard value={[comments ? comments.length : 0, posts ? posts.length : 0]} />
        </CardsDashboard>

        {
          isPost || isComment
            ? (
            <CardsDashboard width='25%' title='Denúncias por tipo' minWidth="420px">
              <div style={{ display: 'flex', flexFlow: 'row' }}>
                {
                  isPost
                    ? (renderInfoCharts(posts, quantity.posts ? quantity.posts : 0, 'Postagens', '#8E5BD0', '#692ABA', 160))
                    : (<></>)
                }
                {
                  isComment
                    ? (renderInfoCharts(comments, quantity.comments ? quantity.comments : 0, 'Comentários', '#692ABA', '#3C166D', 160))
                    : (<></>)
                }
              </div>
            </CardsDashboard>
            )
            : (<></>)
        }

        <TableDiv>
          <CardsDashboard  minWidth='420px' height='300px' title=''>
            <TableDashboard data={reports ? reports.flat() : null} update={handleUpdate}/>
          </CardsDashboard>
        <Link to="/">
          <BackButton className={'fill'}> {"<"} </BackButton>
        </Link>
        </TableDiv>

      </CardSection>
    </DivDashboard>
  )
}

export default Dashboard;
