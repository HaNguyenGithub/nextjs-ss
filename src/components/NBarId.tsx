import { Box, Typography } from "@mui/material";
import navbar from "../styles/Top.module.css";
import { useEffect, useState } from "react";
import { fetchDataApi } from "@/utils/api";
import { format } from "date-fns";
import { useRouter } from 'next/router';

export default function NavBar() {
  const [userName, setUserName] = useState<string>("");
  const [getDate, setDate] = useState<any>("");
  const [avatar, setAvatar] = useState<any>("");
  const router = useRouter();
  const id = router.query.id;
  useEffect(() => {
    fetchData();
  }, [id]);

  //start api
  const fetchData = async () => {
    try {
      const getData = await fetchDataApi(id);
      //get api
      //date
      const timestamp = getData.data.uploaded_at;
      if (timestamp) {
        const formattedDate = format(
          new Date(timestamp),
          "dd/MM/yyyy HH:mm:ss"
        );
        setDate(formattedDate);
      }

      //user name
      setUserName(getData.data.user.name);
      //avatar
      setAvatar(getData.data.user.avatar);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  //end api

  return (
    <>
      <Box>
        <div className={navbar.mainTop}>
          <div className={navbar.user}>
            <Box className={navbar.avatar}>
              <img src={avatar} alt="avatar" />
            </Box>
            <Typography component="p">{userName}</Typography>
          </div>
          <Typography component="p">{getDate}</Typography>
        </div>
      </Box>
    </>
  );
}
