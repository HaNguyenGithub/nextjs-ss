import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import { useEffect, useState, useRef } from 'react';
import { Howl, Howler } from 'howler';
import { format } from 'date-fns';
import { fetchDataApi } from '../utils/api';

export default function BottomAppBar() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [playIcon, setPlayIcon] = useState('/play.svg');
  const soundRef = useRef<Howl | null>(null);
  const [songData, setSongData] = useState<any>('');
  const [userData, setUserData] = useState<any>('');
  const [getData, setData] = useState<string>('');
  const [getDate, setDate] = useState<any>('');

  //Nhạc chạy xong phải trở về nút play
    useEffect(() => {
      fetchData();

      soundRef.current = new Howl({
      src: [getData],
      onplay: () => {
        setIsPlaying(true);
        setPlayIcon('/pause.svg');
      },
      onpause: () => {
        setPlayIcon('/play.svg');
        setIsPlaying(false);
      },
      onend: () => {
        setPlayIcon('/play.svg');
        setIsPlaying(false);
      }
    });

    return () => {
      soundRef.current?.unload();
    };

  },[getData]);

    const handleTogglePlay = () => {
      
      if (!isPlaying) {
        
        soundRef.current?.play();
      } else {
        
        soundRef.current?.pause();
      }
    };
    
    //start api
    const fetchData = async () => {
      try {
      const getData = await fetchDataApi();
      const {name, thumbnail} = getData.data.song;
      setSongData({name, thumbnail});
      setUserData(getData.data.user.name);
      setData(getData.data.link_play);
      const timestamp = getData.data.uploaded_at;
      if (timestamp) {
        const formattedDate = format(new Date(timestamp), 'dd/MM/yyyy HH:mm:ss');
        setDate(formattedDate);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    }
    //end api
    
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="sticky" color="transparent" sx={{ top: 'auto', bottom: 0 , backdropFilter:"blur(50px)"}}>
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center" 
            padding={1}
          >
            <Box width={50} height={50}>
              <img
                src={songData.thumbnail}
                  width={50}
                  height={50}
                  style={{ borderRadius:'8px' }}
                  alt="album-cover"/>
          </Box>
          <Box sx={{flexGrow: 1, marginLeft:"15px"}}>
          <Typography  component="div" sx={{fontSize:"15px"}}>{songData.name}</Typography>
          <Typography  component="div" sx={{fontSize:"15px"}}>{userData}</Typography>
          <Typography  component="div" sx={{fontSize:"10px"}}>{getDate}</Typography>
          </Box>
          <Box sx={{marginTop:"5px", color: "transparent"}}>
            <button id='btnPlay' onClick={handleTogglePlay}>
            <img src={playIcon} alt={isPlaying ? 'Pause' : 'Play'} />
            </button>
            
          </Box>   
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}