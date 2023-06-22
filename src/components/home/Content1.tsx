import { Container, Typography, Box } from "@mui/material";
import content from "../../styles/home/Content1.module.css";
import React, { useEffect, useRef } from 'react';
import ScrollMagic from 'scrollmagic';

export default function Content1() {
    // const scrollContainerRef = useRef<HTMLDivElement>(null);
    // useEffect(() => {
    //     if (scrollContainerRef.current) {
    //         const controller = new ScrollMagic.Controller();

        

    //         const scene = new ScrollMagic.Scene({
    //           triggerElement:"#trigger1",
    //         })
    //         .TweenMax("#howtoplay", 0.5, {backgroundColor: "green", scale: 2.5})
    //         .addIndicators({name: "1 (duration: 0)"})
    //         .addTo(controller);
    //       }
    //     }, []);

    return (
    <>
      <div className={content.howtoplay}>
        <Container className={content.container}>
          <div id="trigger2"></div>
          <div className={content.title} id="howtoplay">
            HOW TO PLAY
          </div>
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
        </Container>
      </div>
    </>
  );
}
