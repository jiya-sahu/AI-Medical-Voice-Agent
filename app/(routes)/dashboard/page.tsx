import React from 'react'
import HistoryList from './_components/HistoryList'
import DoctorsAgentList from './_components/DoctorsAgentList'
import AddNewSession from './_components/AddNewSession'



const Dashboard = () => {
  return (
    <div>
      <div className='flex justify-between'>
        <h2 className='font-bold text-2xl '>My Dashboard</h2>
        <AddNewSession/>
      </div>
      <HistoryList/>
      <DoctorsAgentList/>
     </div>
  )
}

export default Dashboard
