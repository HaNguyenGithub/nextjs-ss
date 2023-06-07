import Head from 'next/head';
import React from 'react';
import { Box, Container, CssBaseline, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import NavBar from '@/components/NavBar';
import BNavBar from '@/components/BottomNavBar';
import Grid from '@mui/material/Grid';
import { useEffect, useState, useRef } from 'react';
import { fetchDataApi } from '../utils/api';

const styles = {
  paperContainer: {
      backgroundImage: `url(${"/bg-score-top.png"})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
			backgroundSize: "cover",
			height: "100%", 
      backgroundColor: "#0a0a0a", 
      boxShadow: "none",
  }
};

export default function Home() {
  const [finalScore , setFinalScore] = useState<any>('');
  const [singEarn , setSingEarn] = useState<any>('');
  const [pitch , setPitch] = useState<any>('');
  const [timbre , setTimbre] = useState<any>('');
  const [songName, setSongName] = useState<any>('');

  useEffect(() => {
    fetchData();
  },[]);

  //start api
  const fetchData = async () => {
    try {
    // const response = await fetch(process.env.API_URL);
    const getData = await fetchDataApi();
    //get api
    const { score, earning_point, pitch_similarity_plot, melspectrogram_file } = getData.data;
    //Final Score
    setFinalScore(score);
    //Sing Earn
    setSingEarn(earning_point);
    //Pitch
    setPitch(pitch_similarity_plot);
    //Timbre
    setTimbre(melspectrogram_file);
    //UserName
    setSongName(getData.data.song.name);

  } catch (error) {
    console.error('Error:', error);
  }
  }
  //end api

  return (
   <>
    <Head>
      <link rel="shortcut icon" href="/home.png" />
      <title>Record: {songName}</title>
    </Head>
    
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#0a0a0a', height: 'fit-content'}}>
        <NavBar/>
        
        <Box> 
            <Box sx={{margin:"0px 0px 15px", color:"#fafafa"}}>
            <Paper style={styles.paperContainer}>
                <Typography align="center" component="div" sx={{padding:"25px 0 15px 0" ,color:"#fafafa", fontFamily: "Roboto", fontSize:"18px", fontWeight:"500"}}>Final Score</Typography>
                <Typography align="center" component="div"  sx={{fontFamily: "Roboto", fontSize:"70px", fontWeight:"700", background:"linear-gradient(257.24deg, #C5FF4A -39.37%, #21F2FF 121.84%)", WebkitBackgroundClip:"text" ,WebkitTextFillColor:"transparent"}}>{finalScore}</Typography>
                <Typography align="center" component="div" sx={{color:"#fafafa", fontFamily: "Roboto", fontSize:"18px", fontWeight:"500"}}>Your earn</Typography>     
            </Paper>          
                  <Grid container justifyContent="center" alignItems="center" padding={1}>
                  <img src='sing-token.svg' height={40} width={40}/>
                  <Typography  color="#f2ce11" sx={{fontFamily: "Roboto", fontSize:"50px",  fontWeight:"700", marginLeft:"5px", background:"linear-gradient(257.24deg, #C5FF4A 39.37%, #FFC000  70.84%)", WebkitBackgroundClip:"text" ,WebkitTextFillColor:"transparent"}}>{singEarn}</Typography>  
                  </Grid>
            </Box>
            <Box>
            <Typography align="center" component="div" sx={{ margin: "25px 0px 5px", color:"#fafafa", fontFamily: "Roboto", fontSize:"18px", fontWeight:"500"}}>PITCH</Typography>  
            <Box sx={{paddingBottom:"20px", overflow: "auto", margin:"5px 20px 25px 20px", overflowX:"scroll"}}>
              <img
                     src={pitch}
                     alt="pitch"
                     style={{maxWidth: 'none', maxHeight:'200px'}}
                     />
           </Box>
            <Typography align="center" component="div" sx={{ margin: "25px 0px 5px", color:"#fafafa", fontFamily: "Roboto", fontSize:"18px", fontWeight:"500"}}>TIMBRE</Typography>  
            <Box sx={{paddingBottom:"20px", overflow: "auto", margin:"5px 20px 25px 20px",overflowX:'scroll'}}>
              <img
                     src={timbre}
                     alt="Timbre"
                     style={{maxWidth: 'none',maxHeight:'200px'}}
                     />
           </Box>
            </Box>
          </Box>
          
          <BNavBar/>
        </Box>
      </Container>
    </React.Fragment>
   </>
  )
}
