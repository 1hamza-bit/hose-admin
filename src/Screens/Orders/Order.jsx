import React from 'react'
import IconBreadcrumbs from '../../components/UI/Breadcrumbs'
import { Button, Card, InputAdornment, TextField, Typography } from '@mui/material'
import BasicTable from '../../components/Tables/Table'
import { Download, Search } from '@mui/icons-material'

function Order() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <Typography gutterBottom variant='h3'>
            Orders
          </Typography>
          <IconBreadcrumbs/>
        </div>

        <Button size='large' startIcon={<Download/>} variant='contained'>
          Export CSV
        </Button>
      </div>

      <div className="mt-12">
        <Card className='px-4 pt-6 pb-2'>
            <div> 
              <TextField
                InputProps={{
                  endAdornment: <InputAdornment position="end"><Search/></InputAdornment>,
                }}
               fullWidth 
               label="Search"
              />
            </div>
            <br />
            <BasicTable/>
        </Card>
      </div>
    </div>
  )
}

export default Order