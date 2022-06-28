import React, { useEffect, useState } from 'react'
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

  const getAllComplaints = (data) => {
    const allComplaints = data ? data.filter((value) => value.status === 'ANALISE') : data;
    return allComplaints;
  };

  useEffect(() => {
    getAllProducts().then((response) => {
      setPosts(response.data);
      setQtComplaintPosts(getAllComplaints(response.data).length);
      setAllComplaint((prev) => [getAllComplaints(response.data)]);
      console.log(allComplaint);
    });
    getAllComments().then((response) => {
      setComments(response.data);
      setQtComplaintComment(getAllComplaints(response.data).length);
      setAllComplaint((prev) => [...prev, getAllComplaints(response.data)]);
      console.log(allComplaint.flat());
    });
  }, []);

  return (
    <DivDashboard>
      <SidebarDashboard />
      <CardSection>
        <CardsDashboard width='200px' title='Total de Posts' >
          {renderInfoCharts(posts,posts ? posts.length : 0, 'Postagens', '#8E5BD0', '#692ABA', 200)}
        </CardsDashboard>

        <CardsDashboard width='200px' title='Total de Coments' >
          {renderInfoCharts(comments, comments ? comments.length : 0, 'Comentários', '#692ABA', '#3C166D', 200)}
        </CardsDashboard>

        <CardsDashboard width='25%' title='Denúncias' minWidth="420px">
          <ChartDashboard value={[qtComplaintComment, qtComplaintPosts, ]} />
        </CardsDashboard>

        <CardsDashboard width='25%' title='Denúncias por tipo' minWidth="420px">
          <div style={{ display: 'flex', flexFlow: 'row' }}>
            {qtComplaintPosts ? renderInfoCharts(true, qtComplaintPosts, 'Postagens', '#8E5BD0', '#692ABA', 160) : null}
            {qtComplaintComment ? renderInfoCharts(true, qtComplaintComment, 'Comentários', '#692ABA', '#3C166D', 160) : null}
          </div>
        </CardsDashboard>

        <TableDiv>
          <CardsDashboard  minWidth='420px' height='300px' title=''>
            <TableDashboard data={allComplaint ? allComplaint.flat() : null} />
          </CardsDashboard>
        <Link to="/">
          <BackButton className={'fill'}> Voltar </BackButton>
        </Link>
        </TableDiv>

      </CardSection>
    </DivDashboard>
  )
}

export default Dashboard;
