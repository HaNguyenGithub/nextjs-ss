import { Container, Typography, Box } from "@mui/material";
import content from "../../styles/home/Content2.module.css";

export default function Content2(){
   const data = [
        {name: 'BRONZE', img_src: '/micro/bronze.png', alt: 'BRONZE'},
        {name: 'SILVER', img_src: '/micro/silver.png', alt: 'SILVER'},
        {name: 'GOLD', img_src: '/micro/gold.png', alt: 'GOLD'},
        {name: 'DIAMOND', img_src: '/micro/diamond.png', alt: 'DIAMOND'},
        {name: 'PLATINUM', img_src: 'micro/platinum.png', alt: 'PLATINUM'},
   ];
    return(
        <>
            <div className={content.carousel}>
                <Container className={content.container}>
                    <Typography component='p'>MICROPHONE</Typography>
                </Container>
                <div className={content.items}>
                <ul className={content.list}>
                    {data.map((item, index )=>(
                         <li className={content.micro} key={index}>
                         <img src={item.img_src} alt={item.alt}/>
                         <Typography component='p'>{item.name}</Typography>
                     </li>
                    ))}     
                    </ul>
                </div>
            </div>
        </>
    );
}