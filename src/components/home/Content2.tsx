import { Container, Typography, Box } from "@mui/material";
import content from "../../styles/home/Content2.module.css";
import  SwiperCore, { EffectCoverflow, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import React, { useRef, useState } from "react";
import { Swiper as SwiperType } from 'swiper';


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
                
                <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        loop={true}
                        speed={200}
                        allowTouchMove={true}
                        slidesPerView={3}
                        slidesPerGroup={1}
                        spaceBetween={100}
                        centeredSlides={true}
                        coverflowEffect={{
                          rotate: 0,
                          stretch: 80,
                          depth: 200,
                          modifier: 1,
                          slideShadows:false,
                        }}
                        initialSlide={1}
                        loopedSlides={2}
                        modules={[EffectCoverflow, Pagination]}
                        className={content.mySwiper}                
                    >
                    {data.map((item, index )=>(
                        
                            <li   key={index}>
                                    <SwiperSlide className={content.micro}>
                                        <img className={content.microImg} src={item.img_src} alt={item.alt}/>
                                        <Typography className={content.microText} component='p'>{item.name}</Typography>
                                    </SwiperSlide>
                            </li> 
                    ))}    
                   
                    </Swiper>   
                    </ul>
                </div>
            </div>
        </>
    );
}