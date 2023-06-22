import { Box, Container, Typography } from "@mui/material";
import footer from "../../styles/home/Footer.module.css";
export default function Footer() {
  return (
    <>
      <footer className={footer.footer}>
        <Container  className={footer.container}>
          <Container  className={footer.box}>
            <div>
              <div className={footer.logo}>
                <img src="/logo_singsing2.svg" />
              </div>
              <div>
              <Typography component="p">© SingSing 2021</Typography>
              </div>
            </div>

              <div>
                <Typography component="h3">Contact</Typography>
                <Typography component="p">Email: contact@singsing.net</Typography>
              </div>
            
            <div>
              <div className={footer.social}>
                  <a href="https://www.facebook.com/SingSingGlobal">
                    <img src="/icon-fb-bw.svg" />
                  </a>
                  <a href="https://twitter.com/singsingnetwork">
                      <img src="/icon-twitter-bw.svg" />
                  </a>
                  <a href="https://t.me/singsingchannel">
                      <img src="/icon-tele-bw.svg" />
                  </a>
                  <a href="https://r.dsc.gg/singsing">
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
            </div>
          </Container>
        </Container>
      </footer>
    </>
  );
}
