import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
import header from '../../styles/home/Header.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Slide, Rotate, Fade } from "react-awesome-reveal";

export default function Header(){
    return(
        <header className={header.bg}>
            {/* Nav */}
            <div>
            <div className={header.top}>
                    <div>
                            <a href="#" className={header.a}>
                            <img src="/logo_singsing.svg" alt="Logo SingSing"/>
                            </a>
                    </div>
                    <ul className={header.menu_hidden_mobile}>
                        <li className={header.dropdown}>
                            <button className={header.button}>
                                <div className={header.pt_2}>
                                    <div className={header.dropdown_content}>
                                        <img src="/flag-en.png"/>
                                    </div>
                                    <span>ENGLISH</span>
                                    <KeyboardArrowDownIcon />
                                </div>
                            </button>
                        </li>
                    </ul>
            </div>
            </div>
            {/*  End Nav */}
            {/* Image */}
            <div className={header.selection}>
                <div className={header.yellow}>
               
                    <div className={header.circle1}></div>
                    
                    <div className={header.circle2}></div>
                  
                </div>
                <div className={header.hidden_mobile}>
                    <Slide direction="up" duration={2000}  className={header.note}>
                    <img src="/header/desktop/musicnote.png" alt="Music note"/>
                    </Slide>
                   
                    <Slide direction="down" duration={1000}  className={header.coin}>
                        <img src="/header/desktop/coin.png" alt="Coin"/>
                    </Slide>
                    <Slide direction="up" duration={500}  className={header.girl}>
                        <img src="/header/desktop/girl.png" alt="Girl"/>
                    </Slide>
                   
                </div>
                <div className={header.text}>
                    <Slide direction="down" duration={2000}>
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