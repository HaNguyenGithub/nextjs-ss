import { Container, Typography, Box } from "@mui/material";
import content from "../../styles/home/Content4.module.css";
export default function Content4(){
   const data =  [
    { name: "PHUNG TIEN CONG", position: "Founder", img_src: "/builders/leader-1.png" },
    { name: "HA PHAM", position: "Co-Founder", img_src: "/builders/leader-2.png" },
    { name: "HAI NGUYEN", position: "Product Manager", img_src: "/builders/team-7.png" },
    { name: "TAM MEO", position: "Music Manager", img_src: "/builders/team-8.png" },
    { name: "LONG VUONG", position: "Founder & CEO Tomochain", img_src: "/builders/team-1.png" },
    { name: "DR. DAVID TRAN", position: "Blockchain Professor Uni of Massachusetts - U.S.A", img_src: "/builders/team-3.png" },
    { name: "DUC TRAN", position: "CEO IDG Capital Vietnam China - USA - Vietnam", img_src: "/builders/team-9.png" },
]
    return(
        <>
            <div className={content.builder}>
                <Container className={content.container}>
                    <Typography component='p'>THE BUILDERS</Typography>
                    <div className={content.rows}>
                            { data.map((item,index)=>(
                                <div className={content.frame} key={index}>
                                    <img src={item.img_src} alt={item.name} />
                                    <div>
                                        <Typography component='h4'>{item.name}</Typography>
                                        <Typography component='p'>{item.position}</Typography>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <h2>20 YEARS OF EXPERIENCE</h2>
                    <h3>IN DIGITAL MUSIC AND KARAOKE INDUSTRY</h3>
                </Container>
            </div>
        </>
    );
}