import React, { useEffect, useState } from 'react'
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { CardsDashboard } from '../../components/CardsDashboard';
import { CardSection } from '../../components/CardsDashboard/styles';
import ChartDashboard from '../../components/ChartDashboard';
import InfoDashboard from '../../components/InfoDashboard';
import SidebarDashboard from '../../components/SidebarDashboard';
import { TableDashboard } from '../../components/TableDashboard';
import { TableDiv } from '../../components/TableDashboard/style';
import { getAllComments } from '../../services/useComments';
import { getAllProducts } from '../../services/useProducts';
import { BackButton, DivDashboard } from './style';

function Dashboard() {
  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState(null);
  const [qtComplaintPosts, setQtComplaintPosts] = useState(0);
  const [qtComplaintComment, setQtComplaintComment] = useState(0);
  const [allComplaint, setAllComplaint] = useState([]);


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

  const getAllComplaints = useCallback((data) => data ? data.filter((value) => value.status === 'ANALISE') : data, [posts, comments]);

  useEffect(() => {
    getAllProducts().then((response) => {
      setPosts(response.data);
      setQtComplaintPosts(getAllComplaints(response.data).length);
      setAllComplaint((prev) => [getAllComplaints(response.data)]);
    });
    getAllComments().then((response) => {
      setComments(response.data);
      setQtComplaintComment(getAllComplaints(response.data).length);
      setAllComplaint((prev) => [...prev, getAllComplaints(response.data)]);
    });
  }, []);

  return (
    <DivDashboard>
      <SidebarDashboard />
      <CardSection>
        <CardsDashboard width='200px' title='Total de Posts' >
          {renderInfoCharts(posts, posts ? posts.length : 0, 'Postagens', '#8E5BD0', '#692ABA', 200)}
        </CardsDashboard>

        <CardsDashboard width='200px' title='Total de Coments' >
          {renderInfoCharts(comments, comments ? comments.length : 0, 'Comentários', '#692ABA', '#3C166D', 200)}
        </CardsDashboard>

        <CardsDashboard width='25%' title='Denúncias' minWidth="420px">
          <ChartDashboard value={[qtComplaintComment || 0, qtComplaintPosts || 0]} />
        </CardsDashboard>

        <CardsDashboard width='25%' title='Denúncias por tipo' minWidth="420px">
          <div style={{ display: 'flex', flexFlow: 'row' }}>
            {renderInfoCharts(true, qtComplaintPosts ? qtComplaintPosts : 0, 'Postagens', '#8E5BD0', '#692ABA', 160)}
            {renderInfoCharts(true, qtComplaintComment ? qtComplaintComment : 0, 'Comentários', '#692ABA', '#3C166D', 160)}
          </div>
        </CardsDashboard>

        <TableDiv>
          <CardsDashboard  minWidth='420px' height='300px' title=''>
            <TableDashboard data={allComplaint ? allComplaint.flat() : null} />
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
