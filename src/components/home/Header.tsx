import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
import header from '../../styles/home/Header.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Header(){
    return(
        <header className={header.bg}>
            {/* Nav */}
            <div className={header.top}>
                <Container className={header.nav}>
                    <div className={header.link}>
                        <a href="">
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
                </Container>
            </div>
            {/*  End Nav */}
            {/* Image */}
            <div className={header.selection}>
                <div className={header.yellow}>
                    <div className={header.circle1}></div>
                    <div className={header.circle2}></div>
                </div>
                <div className={header.hidden_mobile}>
                    <img src="/header/desktop/musicnote.png" alt="Music note"/>
                    <img src="/header/desktop/coin.png" alt="Coin"/>
                    <img src="/header/desktop/girl.png" alt="Girl"/>
                </div>
                <div className={header.text}>
                    <p>SINGSING IS A WEB3 SOCIAL APP THAT</p>
                    <h3>REWARDS</h3>
                    <h4>USER FOR</h4>
                    <h2>SINGING</h2>
                </div>
                <div></div>
            </div>
            {/* End Image */}
        </header>
    );
}