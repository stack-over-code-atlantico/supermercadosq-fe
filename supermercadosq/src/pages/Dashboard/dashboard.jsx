import React, { useState} from 'react'
import { CardsDashboard } from '../../components/CardsDashboard';



function Dashboard(){

  return (
    <div style={{ backgroundColor: '#f6f6f6'}}>
      <h1>Admin</h1>
      <CardsDashboard height='500px' width='500px' />
    </div>
  )
}

export default Dashboard;
