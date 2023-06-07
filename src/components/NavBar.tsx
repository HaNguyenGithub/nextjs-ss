import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { format } from 'date-fns';
import { fetchDataApi } from '../utils/api';

export default function NavBar() {
  const [userName, setUserName] = useState<string>('');
  const [getDate, setDate] = useState<any>('');
  const [avatar, setAvatar] = useState<any>('');

  useEffect(() => {
    fetchData();
  },[]);

  //start api
  const fetchData = async () => {
    try {
    const getData = await fetchDataApi();
    //get api 
    //date
    const timestamp = getData.data.uploaded_at;
    if (timestamp) {
      const formattedDate = format(new Date(timestamp), 'dd/MM/yyyy HH:mm:ss');
      setDate(formattedDate);
    }

    //user name
    setUserName(getData.data.user.name);
    //avatar
    setAvatar(getData.data.user.avatar);

  } catch (error) {
    console.error('Error:', error);
  }
  }
  //end api

  return (
    <Box>
      <AppBar position="static" style={{ background: '#a60f9c', bottom: 0 }}>
        <Toolbar>
        <Typography component="div">
          <Avatar alt="avatar" src={avatar}  sx={{ marginRight: "15px", backgroundColor: "#21212b" }}/>
          </Typography>
          
          <Typography component="div" sx={{ fontSize:"15px"}}>
              {userName}
          </Typography>
          <Typography component="div" sx={{ fontSize:"10px", marginLeft:"250px"}}>
            {getDate}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}