import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
import header from '../../styles/home/Header.module.css'
export default function Header(){
    return(
        <header className={header.bg}>
            <div className={header.top}>
                <Container className={header.nav}>
                    <div className={header.link}>
                        <a href="">
                            <img src="/logo_singsing.svg" alt="Logo SingSing"/>
                        </a>
                    </div>
                    <ul className={header.menu_hidden_mobile}>
                        <li>
                            <button>
                                <div className={header.pt_2}>
                                    <div className={header.dropdown_content}>
                                        <a href="">ENGLISH</a>
                                        <a href="">VIETNAM</a>
                                    </div>
                                </div>
                            </button>
                        </li>
                    </ul>
                </Container>
            </div>
        </header>
    );
}