import { Container, Typography, Box } from "@mui/material";
import content from "../../styles/home/Content1.module.css";
import React from 'react';
import { Zoom, Bounce, Slide } from "react-awesome-reveal";

export default function Content1() {
  const data = [
    {
      img: "/screenshot/1.png",
      text1: "EQUIP YOUR",
      text2: "MICROPHONE",
    },
    {
      img: "/screenshot/2.png",
      text1: "CHOOSE",
      text2:  "A SONG",
    },
    {
      img: "/screenshot/3.png",
      text1: "START",
      text2: "TO SING",
    },
    {
      img: "/screenshot/4.png",
      text1: "GET",
      text2: "REWARDS",
  },
  ];
  const arrow = {img: "/screenshot/arrow.svg"};

    return (
    <>
      <div className={content.howtoplay}>
        <Container className={content.container}>
          <Zoom className={content['zoom-in']}>
            <div id="howtoplay">
              HOW TO PLAY
            </div>
          </Zoom>

         
          <div className={content.phone}>
            {data.map( (item, index) => (
               <Slide 
                  className={content['phone']} direction="right" 
                  key={index}
                  delay={index * 200}
                  duration={1000}
                >
                <div>
                <img src={item.img} />
                <p>
                  {item.text1}       
                  <br/>
                  {item.text2}  
                </p>
                <div className={content.arrow}>
                  {index < 3 && <img src="/screenshot/arrow.svg" />}
                </div>
              </div>
               </Slide>
            ))}
            </div>
         
        </Container>
      </div>
    </>
  );
}

{/* <Slide className={content['phoneAni']} direction="right">
          <div className={content.phone}>
            <div>
              <img src="/screenshot/1.png" />
              <p>
                EQUIP YOUR       
                <br />
                MICROPHONE
              </p>
              <div>
                <img src="/screenshot/arrow.svg" />
              </div>
            </div>

            <div>
              <img src="/screenshot/2.png" />
              <p>
                CHOOSE
                <br />
                A SONG
              </p>
              <div>
                <img src="/screenshot/arrow.svg" />
              </div>
            </div>

            <div>
              <img src="/screenshot/3.png" />
              <p>
                START
                <br />
                TO SING
              </p>
              <div>
                <img src="/screenshot/arrow.svg" />
              </div>
            </div>

            <div>
              <img src="/screenshot/4.png" />
              <p>
                GET
                <br />
                REWARDS
              </p>
            </div>
            
          </div>
          </Slide>
           */}