import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';

export default function NavBar() {
  return (
    <Box>
      <AppBar position="static" style={{ background: '#a60f9c', bottom: 0 }}>
        <Toolbar>
        <Typography component="div">
          <Avatar alt="avatar" src="/avatar.svg"  sx={{ marginRight: "15px", backgroundColor: "#21212b" }}/>
          </Typography>
          
          <Typography component="div" sx={{ fontSize:"15px"}}>
              Wan Pis Cecile
          </Typography>
          <Typography component="div" sx={{ fontSize:"10px", marginLeft:"250px"}}>
            22:05:09 14/05/2023
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}