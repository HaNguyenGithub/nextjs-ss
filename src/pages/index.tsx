import Head from 'next/head';
import React from 'react';
import { Box, Container, CssBaseline, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import NavBar from '@/components/NavBar';
import BNavBar from '@/components/BottomNavBar';
import Grid from '@mui/material/Grid';

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
  return (
   <>
    <Head>
      <link rel="shortcut icon" href="/home.png" />
      <title>Recorded:</title>
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
                <Typography align="center" component="div"  sx={{fontFamily: "Roboto", fontSize:"70px", fontWeight:"700", background:"linear-gradient(257.24deg, #C5FF4A -39.37%, #21F2FF 121.84%)", WebkitBackgroundClip:"text" ,WebkitTextFillColor:"transparent"}}>56.91</Typography>
                <Typography align="center" component="div" sx={{color:"#fafafa", fontFamily: "Roboto", fontSize:"18px", fontWeight:"500"}}>Your earn</Typography>     
            </Paper>          
                  <Grid container justifyContent="center" alignItems="center" padding={1}>
                  <img src='sing-token.svg' height={40} width={40}/>
                  <Typography  color="#f2ce11" sx={{fontFamily: "Roboto", fontSize:"50px",  fontWeight:"700", marginLeft:"5px", background:"linear-gradient(257.24deg, #C5FF4A 39.37%, #FFC000  70.84%)", WebkitBackgroundClip:"text" ,WebkitTextFillColor:"transparent"}}>29.5</Typography>  
                  </Grid>
            </Box>
            <Box>
            <Typography align="center" component="div" sx={{ margin: "25px 0px 5px", color:"#fafafa", fontFamily: "Roboto", fontSize:"18px", fontWeight:"500"}}>PITCH</Typography>  
            <Box sx={{paddingBottom:"20px", overflow: "auto", margin:"5px 20px 25px 20px", overflowX:"scroll"}}>
              <img
                     src="/pitch.png"
                     alt="pitch"
                     style={{maxWidth: 'none', maxHeight:'200px'}}
                     />
           </Box>
            <Typography align="center" component="div" sx={{ margin: "25px 0px 5px", color:"#fafafa", fontFamily: "Roboto", fontSize:"18px", fontWeight:"500"}}>TIMBRE</Typography>  
            <Box sx={{paddingBottom:"20px", overflow: "auto", margin:"5px 20px 25px 20px",overflowX:'scroll'}}>
              <img
                     src="/timbre.png"
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
