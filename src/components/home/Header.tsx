import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
import header from "../../styles/home/Header.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AppsIcon from '@mui/icons-material/Apps';
import { Slide, Rotate, Fade, Bounce } from "react-awesome-reveal";
import { useState } from "react";

export default function Header() {
  const [ isBars, setBars ] = useState("false");
  return (
    <header className={header.bg}>
      {/* Nav */}
      <div className={header.dawer}>
        <div>
          <button className={header.close}>
            <img src="https://d33wubrfki0l68.cloudfront.net/623c9c3d4ee3503448fad2805f346c3e7e814e9c/d0c47/assets/icons/icon-close.svg" alt="close"/>
          </button>
        </div>
        <ul>
        <li className={header.dropdown}>
              <button className={header.button}>
                <div className={header.pt_2}>
                  <div className={header.dropdown_content}>
                    <img src="/flag-en.png" />
                  <span>ENGLISH</span>
                  </div>
                  <KeyboardArrowDownIcon />
                </div>
              </button>
              <div className={header.pt_2_2}>
                <div className={header.language}>
                  <a href="#">ENGLISH</a>
                  <a href="#">VIETNAM</a>
                </div>
              </div>
            </li>
        </ul>
      </div>
      
      <div className={header.top}>
        <div className={header.container}>
          <div>
            <a href="#" className={header.a}>
              <img src="/logo_singsing.svg" alt="Logo SingSing" />
            </a>
          </div>

          <ul className={header.menu_hidden_mobile}>
            <li className={header.dropdown}>
              <button className={header.button}>
                <div className={header.pt_2}>
                  <div className={header.dropdown_content}>
                    <img src="/flag-en.png" />
                  </div>
                  <span>ENGLISH</span>
                  <KeyboardArrowDownIcon/>
                </div>
              </button>           
            </li>
          </ul>

          <div className={header.menu_hidden_desktop}>
            <AppsIcon/>
          </div>

        </div>
      </div>
      {/*  End Nav */}
      {/* Image */}
      <div className={header.selection}>

        <div className={header.yellow}>
          <Bounce 
            duration={1000}
            delay={1000}
            className={header.bounce1}
            >
            <div className={header.circle1}></div>
          </Bounce >
         <Bounce 
            duration={1000}
            delay={1000}
            className={header.bounce2}
            >
            <div className={header.circle2}></div>
         </Bounce>
        </div>

        <div className={header.hidden_mobile}>
          <Slide
            direction="up"
            duration={1000}
            delay={200}
            className={header.note}
          >
            <img src="/header/desktop/musicnote.png" alt="Music note" />
          </Slide>

          <Slide
            direction="down"
            duration={1000}
            delay={400}
            className={header.coin}
          >
            <img src="/header/desktop/coin.png" alt="Coin" />
          </Slide>
          <Slide
            direction="up"
            duration={1000}
            delay={600}
            className={header.girl}
          >
            {/* <Box component='img' sx={{width: { sx:'25%',sm: '100%',}}} src="/header/desktop/girl.png" alt="Girl"/> */}
            <img src="/header/desktop/girl.png" alt="Girl"/>
          </Slide>
        </div>
        <div className={header.text}>
          <Slide direction="down">
            <div>
              <p>SINGSING IS A WEB3 SOCIAL APP THAT</p>
              <h3>REWARDS</h3>
              <h4>USER FOR</h4>
              <h2>SINGING</h2>
            </div>
          </Slide>
        </div>
        <div className={header.gradient}></div>
      </div>
      {/* End Image */}
    </header>
  );
}
