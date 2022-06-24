import React, { useEffect, useState } from 'react'
import { CardsDashboard } from '../../components/CardsDashboard';
import { CardSection } from '../../components/CardsDashboard/styles';
import ChartDashboard from '../../components/ChartDashboard';
import InfoDashboard from '../../components/InfoDashboard';
import SidebarDashboard from '../../components/SidebarDashboard';
import { getAllComments } from '../../services/useComments';
import { getAllProducts } from '../../services/useProducts';

function Dashboard() {
  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState(null);

  const flex = { display: 'flex' };

  useEffect(() => {
    getAllProducts().then((response) => {
      setPosts(response.data.length);
    });
    getAllComments().then((response) => {
      setComments(response.data.length);
    });
  }, [])

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
  }

  return (
    <div style={flex}>
      <SidebarDashboard />
      <CardSection>
        <CardsDashboard width='200px' title='Total de Posts' >
          {renderInfoCharts(posts, posts, 'Postagens', '#8E5BD0', '#692ABA', 200)}
        </CardsDashboard>

        <CardsDashboard width='200px' title='Total de Coments' >
          {renderInfoCharts(comments, comments, 'Comentários', '#692ABA', '#3C166D', 200)}
        </CardsDashboard>

        <CardsDashboard width='25%' title='Denúncias' minWidth="420px">
          <ChartDashboard />
        </CardsDashboard>

        <CardsDashboard width='25%' title='Denúncias por tipo' minWidth="420px">
          <div style={{ display: 'flex', flexFlow: 'row' }}>
            {renderInfoCharts(true, 26, 'Postagens', '#8E5BD0', '#692ABA', 160)}
            {renderInfoCharts(true, 150, 'Comentários', '#692ABA', '#3C166D', 160)}
            {renderInfoCharts(true, 80, 'Usuários', '#B996E8', '#8E5BD0', 160)}
          </div>
        </CardsDashboard>
      </CardSection>
    </div>
  )
}

export default Dashboard;
