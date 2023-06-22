// // import { Container, Typography, Box } from "@mui/material";
// // import content from "../../styles/home/Content2.module.css";
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import 'swiper/css';
// // import 'swiper/css/effect-coverflow';
// // import 'swiper/css/pagination';
// // import 'swiper/css/navigation';
// // import { EffectCoverflow, Pagination, Navigation } from 'swiper';

// // export default function Content2(){
// //    const data = [
// //         {name: 'BRONZE', img_src: '/micro/bronze.png', alt: 'BRONZE'},
// //         {name: 'SILVER', img_src: '/micro/silver.png', alt: 'SILVER'},
// //         {name: 'GOLD', img_src: '/micro/gold.png', alt: 'GOLD'},
// //         {name: 'DIAMOND', img_src: '/micro/diamond.png', alt: 'DIAMOND'},
// //         {name: 'PLATINUM', img_src: 'micro/platinum.png', alt: 'PLATINUM'},
// //    ];
// //     return(
// //         <>
// //             <div className={content.carousel}>
// //                 <Container className={content.container}>
// //                     <Typography component='p'>MICROPHONE</Typography>
// //                 </Container>
// //                 <div className={content.items}>
                    
// //                         <ul className={content.list}>
// //                         <Swiper
// //                           effect={'coverflow'}
// //                           centeredSlides={true}
// //                           autoHeight={true}
// //                           loop={true}
// //                           slidesPerView={3}
// //                           slidesPerGroup={2}
// //                           maxBackfaceHiddenSlides={10}
// //                           loopedSlides={1}
// //                           coverflowEffect={{
// //                           rotate: 100,
// //                           stretch: 100,
// //                           depth: 100,
// //                           modifier: 10.5,
// //                           }}                       
// //                           modules={[EffectCoverflow, Pagination, Navigation]}
// //                           className="swiper_container"
// //                       >  
// //                         {data.map((item, index )=>(
                          
// //                                  <li className={content.micro} key={index}>
// //                                     <SwiperSlide className={content.microItems}>
// //                                     <img src={item.img_src} alt={item.alt}/>
// //                                     <Typography component='p'>{item.name}</Typography>
// //                                     </SwiperSlide>
                                    
// //                                 </li>   
                                
// //                     ))}     
// //                    </Swiper>
// //                     </ul>
                    
// //                 </div>
// //             </div>
// //         </>
// //     );
// // }

// .carousel{
//     position: relative;
//     width: 100%;
//     min-height: 10vh;
//     background-color: #181a20;
//     padding-top: 8.8rem;
//     padding-bottom: 8.8rem;
//     box-sizing: border-box;
//     display: block;
//     line-height: 1.5;
// }

// .container{
//     position: relative;
//     margin: auto;
//     max-width: 1228px;
//     overflow: hidden;
//     line-height: 1.5;
// }

// .container p{
//     font-size: 10.8rem;
//     font-weight: 800;
//     color: #fff;
//     text-align: center;
//     padding-bottom: 10rem;
// }

// .items{
//     display: flex;
//     width: 100%;
//     height: 100%;
//     align-items: center;
//     font-family: Arial;
//     margin-bottom: 3rem !important;

// }

// .list{
//     display: flex;
//     list-style: none;
//     position: relative;
//     width: 100%;
//     height: 660px;
//     justify-content: center;
//     perspective: 660px;
//     padding-left: 0 !important;
// }

// .micro{
//     position: absolute;
//     transition: all .3s ease-in;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     width: 25%;
//     opacity: .4;
//     filter: blur(3px) grayscale(20%);
//     transform: translateX(-130%) scale(.8);
//     z-index: 3;
// }

// .microItems{
//     height: 25%;
//     width: 25%;
//     align-items: center;
//     justify-content: center;
//     transform: translateX(-130%) scale(.8);
//     z-index: 1;
//     background: transparent;
// }

// .microItems img{
//     width: 100%;
//     height: 100%;
//     padding: 5rem 5rem 5rem 5rem;
//     border-radius: 55px;
//     box-shadow: 0 13px 21px rgba(0,0,0,.34);
//     backdrop-filter: rgba(153,153,153,.13);
//     object-fit: contain;
// }

// .microItems  p {
//     font-size: 3.4rem;
//     font-weight: 600;
//     color: #fff;
//     text-align: center;
//     padding-top: 2rem;
//     margin-top: 0;
//     margin-bottom: 1rem;
//     border-radius: 55px;
// }