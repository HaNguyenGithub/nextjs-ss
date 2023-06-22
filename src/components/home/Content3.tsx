import { Container, Typography, Box } from "@mui/material";
import content from "../../styles/home/Content3.module.css";
export default function Content3(){
    const data = [
        {singer: "NHU QUYNH", followNumber: "388K", text: "Followers", img_src: "/singers/singer-1.png"},
        {singer: "TUAN HUNG", followNumber: "7.5M", text: "Followers", img_src: "/singers/singer-2.png"},
        {singer: "LK", followNumber: "955K", text: "Followers", img_src: "/singers/singer-3.png"},
        {singer: "BRAY", followNumber: "4.2M", text: "Followers", img_src: "/singers/singer-4.png"},
        {singer: "DATMANIAC", followNumber: "250K", text: "Followers", img_src: "/singers/singer-5.png"},
        {singer: "MASEW", followNumber: "4.1M", text: "Followers", img_src: "/singers/singer-6.png"},
        {singer: "ANDIEZ", followNumber: "246.6K", text: "Followers", img_src: "/singers/singer-7.png"},
        {singer: "SEECHAIN", followNumber: "572.2K", text: "Followers", img_src: "/singers/singer-8.png"},
        {singer: "HIEUTHUHAI", followNumber: "1M", text: "Followers", img_src: "/singers/singer-9.png"},
        {singer: "PHAO", followNumber: "1.3M", text: "Followers", img_src: "/singers/singer-10.png"},
        {singer: "W/N", followNumber: "1.1M", text: "Followers", img_src: "/singers/singer-11.png"},
        {singer: "EMMA", followNumber: "2.2M", text: "Followers", img_src: "/singers/singer-12.png"},
        {singer: "RIGHT", followNumber: "47K", text: "Followers", img_src: "/singers/singer-13.png"},
        {singer: "DINH MANH NINH", followNumber: "275.4K", text: "Followers", img_src: "/singers/singer-14.png"},
        {singer: "DUONG TRAN NGHIA", followNumber: "26.4K", text: "Followers", img_src: "/singers/singer-15.png"},
        {singer: "NGOC KHUE", followNumber: "51.2K", text: "Followers", img_src: "/singers/singer-16.png"},
    ];

    return(
        <>
            <div className={content.singers}>
                <Container className={content.container}>   
                    <Typography component="p">FAMOUS SINGERS</Typography>
                    <div className={content.rows}>
                        {
                            data.map((item, index) => (
                                <div className={content.frame} key={index}>
                                    <img src={item.img_src} alt={item.singer}/>
                                    <div>
                                        <Typography component="h3">{item.singer}</Typography>
                                        <Typography component="h2">{item.followNumber}</Typography>
                                        <Typography component="p">{item.text}</Typography>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className={content.content} >
                        <span>36,000,000+</span><br/> SOCIAL FOLLOWERS
                    </div>
                </Container>
            </div>
        </>
    );
}