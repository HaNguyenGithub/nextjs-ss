import { Box, Container, Typography } from "@mui/material";
import footer from "../../styles/home/Footer.module.css";
export default function Footer() {
  return (
    <>
      <footer className={footer.footer}>
        <Container  className={footer.container}>
          <Container  className={footer.box}>
            <Box className={footer.box1}>
              <a href="">
                <img src="/logo_singsing2.svg" />
              </a>
              <Typography component="p">© SingSing 2021</Typography>
            </Box>
            <Box className={footer.box2}>
              <Typography component="h3">Contact</Typography>
              <Typography component="p">Email: contact@singsing.net</Typography>
            </Box>
            <Box className={footer.box3}>
              <div className={footer.social}>
                  <a href="">
                    <img src="/icon-fb-bw.svg" />
                  </a>
                    <a href="">
                      <img src="/icon-twitter-bw.svg" />
                    </a>

                    <a href="">
                      <img src="/icon-tele-bw.svg" />
                    </a>

                  <a href="">
                    <img src="/icon-discord-bw.svg" />
                  </a>
              </div>
              <div className={footer.doc}>
                <a href="">
                  <Typography component="p">Term of service</Typography>
                </a>
                <a href="">
                  <Typography component="p">Privacy Policy</Typography>
                </a>
              </div>
            </Box>
          </Container>
        </Container>
      </footer>
    </>
  );
}
