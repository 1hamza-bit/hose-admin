import React from 'react'
import IconBreadcrumbs from '../../components/UI/Breadcrumbs'
import { Typography } from '@mui/material'
import Dashboard_card from '../../components/Dashboard/Dashboard_card'
import BasicLineChart from '../../components/Charts/SmallLineChart'

function Dashboard() {
  return (
    <div>
        <div>
          <Typography gutterBottom variant='h3'>
            Dashboard
          </Typography>
          <IconBreadcrumbs/>
        </div>
        <div className="mt-10 grid grid-cols-4 gap-x-4">
            <Dashboard_card/>
            <Dashboard_card/>
            <Dashboard_card/>
        </div>

        <div className="mt-20">
            <BasicLineChart/>
        </div>
    </div>
  )
}

export default Dashboard