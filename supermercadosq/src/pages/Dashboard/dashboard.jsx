import React from 'react'
import { CardsDashboard } from '../../components/CardsDashboard';
import ChartDashboard from '../../components/ChartDashboard';

function Dashboard(){

  return (
    <div style={{ backgroundColor: '#f6f6f6', height: '100vh' }}>
      <CardsDashboard height='300px' width='450px'>
        <ChartDashboard />
      </CardsDashboard>
    </div>
  )
}

export default Dashboard;
