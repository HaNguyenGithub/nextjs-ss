import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import record from "../../styles/Content.module.css";
import NavBar from "@/components/NBarId";
import BNavBar from "@/components/BNBarId";
import { fetchDataApi } from "../../utils/api";
import Head from "next/head";
import { useRouter } from 'next/router';

export default function Record() {
  const [finalScore, setFinalScore] = useState<any>("");
  const [singEarn, setSingEarn] = useState<any>("");
  const [pitch, setPitch] = useState<any>("");
  const [timbre, setTimbre] = useState<any>("");
  const [songName, setSongName] = useState<any>("");
  const title = `Record: ${songName}`;
  const router = useRouter();
  const id = router.query.id;
  //API start
  useEffect(() => {
    fetchData();
  }, [id]);
  const fetchData = async () => {
    try {
      const getData = await fetchDataApi(id);
      //get api
      const {
        score,
        earning_point,
        pitch_similarity_plot,
        melspectrogram_file,
      } = getData.data;
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
      console.error("Error:", error);
    }
  };
  //API end

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <React.Fragment>
        <CssBaseline />
        <Container className={record.main}>
          <NavBar />
          <Container className={record.points}>
            <div>
              <Typography component="p">Final Score</Typography>
              <Typography component="p">{finalScore}</Typography>
              <Typography component="p">Your earn</Typography>
              <Typography component="p">
                <img src="/sing-token.svg" alt="sing-token" />
                {singEarn}
              </Typography>
            </div>
          </Container>
          <Container className={record.map}>
            <Grid>
              <div>
                <Typography component="p">PITCH</Typography>
              </div>
              <div>
                <Box>
                  <img src={pitch} alt="PITCH" />
                </Box>
              </div>
              <div>
                <Typography component="p">TIMBRE</Typography>
              </div>
              <div>
                <Box>
                  <img src={timbre} alt="TIMBRE" />
                </Box>
              </div>
              <br/>
            </Grid>
          </Container>
          <BNavBar/>
        </Container>
      </React.Fragment>
    </>
  );
}
