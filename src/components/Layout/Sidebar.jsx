import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import FilterFramesOutlinedIcon from '@mui/icons-material/FilterFramesOutlined';
import { Divider } from '@mui/material';

export default function IconMenu() {
  return (
    <Paper className='fixed top-0 left-0 h-screen p-4' sx={{ width: 300, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem sx={{borderRadius:1}}>
          <ListItemIcon>
            <DashboardOutlinedIcon fontSize='small' sx={{color: 'primary.main'}} />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </MenuItem>
        <Divider/>
        <MenuItem sx={{borderRadius:1}}>
          <ListItemIcon>
            <Inventory2OutlinedIcon fontSize='small' sx={{color: 'secondary.main'}}/>
          </ListItemIcon>
          <ListItemText>Products List</ListItemText>
        </MenuItem>
        <MenuItem sx={{borderRadius:1}}>
          <ListItemIcon>
            <AddCircleOutlinedIcon fontSize='small' sx={{color: 'error.main'}}/>
          </ListItemIcon>
          <ListItemText>Create Product</ListItemText>
        </MenuItem>
        <Divider/>
        <MenuItem sx={{borderRadius:1}}>
          <ListItemIcon>
            <FilterFramesOutlinedIcon fontSize='small' sx={{color: 'warning.main'}}/>
          </ListItemIcon>
          <ListItemText>Manage Orders</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
