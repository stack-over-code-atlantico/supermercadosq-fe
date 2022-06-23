import React, { useEffect, useState } from 'react'
import { CardsDashboard } from '../../components/CardsDashboard';
import { CardSection } from '../../components/CardsDashboard/styles';
import ChartDashboard from '../../components/ChartDashboard';
import InfoDashboard from '../../components/InfoDashboard';
import { getAllComments } from '../../services/useComments';
import { getAllProducts } from '../../services/useProducts';

function Dashboard() {
  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState(null);


  useEffect(() => {
    getAllProducts().then((response) => {
      setPosts(response.data.length);
    });
    getAllComments().then((response) => {
      setComments(response.data.length);
    });
  }, [])


  return (
    <>
      <CardSection>
        <CardsDashboard height='260px' width='430px' title='Denúncias'>
          <ChartDashboard />
        </CardsDashboard>

        <CardsDashboard height='260px' width='360px' title='Denúncias por tipo' >
          <InfoDashboard
            size={160}
            title={'Postagens'}
            primaryColor={'#60dff6'}
            secondaryColor={'#3ebcd3'}
            value={26}
            fontSize={12}
            marginTop={10}
          />
          <InfoDashboard
            size={160}
            title={'Comentários'}
            primaryColor={'#ffb3b2'}
            secondaryColor={'#f66a69'}
            value={150}
            fontSize={10}
            marginTop={10}
          />
          <InfoDashboard
            size={160}
            title={'Usuários'}
            primaryColor={'#7ef42a'}
            secondaryColor={'#76bc44'}
            value={80}
            fontSize={12}
            marginLeft='80px'
            marginTop={-30}
          />
        </CardsDashboard>

        <CardsDashboard height='260px' width='240px' title='Total de Posts' >
          {
            posts
              ? (
                <InfoDashboard
                  size={200}
                  title={'Postagens'}
                  primaryColor={'#60dff6'}
                  secondaryColor={'#3ebcd3'}
                  value={posts}
                  fontSize={12}
                  marginTop={10}
                />
              ) :
              (<></>)
          }
        </CardsDashboard>

        <CardsDashboard height='260px' width='240px' title='Total de Coments' >
          {
            comments
              ? (
                <InfoDashboard
                  size={200}
                  title={'Comentários'}
                  primaryColor={'#ffb3b2'}
                  secondaryColor={'#f66a69'}
                  value={comments}
                  fontSize={12}
                  marginTop={10}
                />
              )
              : (<></>)
          }
        </CardsDashboard>


      </CardSection>

      <CardSection>
        <CardsDashboard height='260px' width='45%' title='Listagem de comentários denunciados'>

        </CardsDashboard>
        <CardsDashboard height='260px' width='45%' title='Listagem de postagens denunciadas'>

        </CardsDashboard>
      </CardSection>
    </>
  )
}

export default Dashboard;
