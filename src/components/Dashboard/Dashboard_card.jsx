import { Card, Typography } from '@mui/material'
import React from 'react'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BasicLineChart from '../Charts/SmallLineChart';

function Dashboard_card() {
  return (
    <div>
        <Card className='p-5'>
            <div className="flex items-center space-x-3">
                <div className="bg-purple-100 text-purple-800 w-10 h-10 flex justify-center items-center rounded-full">
                    <AccountBalanceIcon fontSize='small'/>
                </div>
                <Typography variant='h6'>
                    Total Sales
                </Typography>
            </div>
            <div className="flex justify-between">
            <div className="mt-4">
                <Typography variant='h4'>
                    300K $
                </Typography>
                <div className="mt-1"></div>
                <Typography variant='body2' sx={{color:'success.main'}}>
                    +150%
                </Typography>
            </div>
            <div>
                <BasicLineChart/>
            </div>
            </div>
        </Card>
    </div>
  )
}

export default Dashboard_card