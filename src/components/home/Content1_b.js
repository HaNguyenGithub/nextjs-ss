import { Container, Typography, Box } from "@mui/material";
import content from "../../styles/home/Content1.module.css";
import React, { useEffect } from 'react';
import ScrollMagic from 'scrollmagic';
import { TweenMax } from 'gsap';

export default function Content1() {
  useEffect(() => {
    // init controller
    const controller = new ScrollMagic.Controller();

    // build scene
    const scene = new ScrollMagic.Scene({
      triggerElement: "#trigger1"
    })
    .setTween("#howtoplay", 0.5, {scale: 50}) // trigger a TweenMax.to tween
    .addTo(controller);
  }, []);


    return (
    <>
      <div className={content.howtoplay}>
        <Container className={content.container}>
        <div className="spacer s2"></div>
          <div id="trigger1" class="spacer s0"></div>
          <div className={content.title} id="howtoplay">
            HOW TO PLAY
          </div>
          <div className="spacer s2"></div>
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
