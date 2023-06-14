import { Box, Typography } from "@mui/material";
import bnavbar from "../styles/Bottom.module.css";
import { Button } from '@mui/material';
import { useEffect, useRef, useState } from "react";
import { fetchDataApi } from "@/utils/api";
import { format } from "date-fns";
import { useRouter } from 'next/router';

export default function BNavBar() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songData, setSongData] = useState<any>("");
    const [userData, setUserData] = useState<any>("");
    const [getLink, setLink] = useState<string>(" ");
    const [getDate, setDate] = useState<any>("");
    const router = useRouter();
    const id = router.query.id;
    useEffect(() => {
      fetchData();
    }, [id]);
    
    const PlayingSong = () => {
        if(audioRef.current){
            if(isPlaying){
                audioRef.current.pause();
            }
            else{
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleAudioEnded = () => {
        setIsPlaying(false);
      };

    //start api
  const fetchData = async () => {
    try {
      const getData = await fetchDataApi(id);
      const { name, thumbnail } = getData.data.song;
      setSongData({ name, thumbnail });
      setUserData(getData.data.user.name);
      setLink(getData.data.link_play);
      const timestamp = getData.data.uploaded_at;
      if (timestamp) {
        const formattedDate = format(
          new Date(timestamp),
          "dd/MM/yyyy HH:mm:ss"
        );
        setDate(formattedDate);
      }


    } catch (error) {
      console.error("Error:", error);
    }
  };
  //end api

  return (
    <>
      <div className={bnavbar.mainBottom}>
        <div className={bnavbar.audio}>
            <audio ref={audioRef} src={getLink} onEnded={handleAudioEnded}/>
        </div>
        <Box className={bnavbar.player}>
          <div className={bnavbar.song}>
            <div>
              <img src={songData.thumbnail} alt="cover" />
            </div>
            <div>
              <Typography component="p">{songData.name}</Typography>
              <Typography component="p">{userData}</Typography>
              <Typography component="p">{getDate}</Typography>
            </div>
          </div>
          <Button className={bnavbar.button} onClick={PlayingSong}>
            {isPlaying ? <img src="/pause.svg" alt="pause" /> : <img src="/play.svg" alt="play" /> }
          </Button>
        </Box>
      </div>
    </>
  );
}