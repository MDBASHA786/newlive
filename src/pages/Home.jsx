import React, { useEffect } from "react";

import Logo from "../assets/imgs/iconlogo.jpg";

import "../assets/fonts/font.css";
import "../assets/fonts/nusar.css";

// 3
import Button from "../components/Button";
import CountDown from "../components/CountDown";

import Events from "../components/Events";
import Services from "../components/Services";
import Contact from "../components/Contact";

import { META_EVENTS, SPONSERS, contentData } from "../utils/constants";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      {/* hero-section */}
      <div className="hero" style={{ zIndex: 180, position: "relative" }}>
        <div className="container logo">
          <div className="logo-img">
            <img
              height={300}
              width={700}
              src={Logo}
              alt="ICON'25 - A National Level Technical Symposium"
            />
          </div>

          {/* <div className="logo-txt glow" style={{ fontFamily: "Netron" }}>
            Petrona
          </div>
          <div className="glitch-wrapper">
            <div
              className="glitch"
              style={{ margin: "16px 0" }}
              data-glitch="A National Level Technical Symposium"
            >
              A National Level Technical Symposium
            </div>
          </div> */}
          <Button className="reg-btn" />
          <p style={{ fontSize: 34 }}>13th February'25</p>
        </div>
      </div>

      {/* CountDown */}
      <h1 className="count-h">COUNTDOWN</h1>
      <CountDown />

      {/*About*/}
      {Object.entries(contentData).map(([key, section]) => (
        <div className="content-container" key={key}>
          <h1 class="count-h">{section.title}</h1>
          <p class="count-p" style={{textAlign:"justify", padding:"0 25px"}}>{section.text}</p>
        </div>
      ))}

      {/* Tech Events */}
      {META_EVENTS.map((data, key) => (
        <div key={key}>
          <h1 className="count-h">{data.title}</h1>
          <p className="count-p">{data.desc}</p>

          <div className="grid-conatiner" style={{ position: "relative" }}>
            {data.events.map((event, index) => (
              <Events
                style={{ position: "relative" }}
                events={event}
                key={index}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Event Details */}
      <p className="count-p" style={{ fontSize: 38, paddingTop: 8 }}>
        Explore Our Awaited Offerings !
      </p>
      <Services />

      {/* Sponsers  */}
      <h1 className="count-h">SPONSORS</h1>
      <div className="grid-sponsers">
        {SPONSERS.map((sponser, index) => (
          <div className="card" key={index}>
            <img src={sponser.imgURL} width="230" alt={sponser.name} />
          </div>
        ))}
      </div>

      {/* DEVELOPERS  */}
      <h1 className="count-h">DEVELOPERS TEAM</h1>
      <div className="grid-services1" style={{ position: 'relative' }}>
        <div className="card1">
          <div className="dotted-design" style={{ top: 9}}>
            <div className="dot">  </div>
            <div className="dot">  </div>
          </div>
          <img src="/imgs/developers/LOKESH-J IMG.png" width="230" style={{borderRadius:"20px"}}></img>
          <p>LOKESH J</p>
          <p>Web Developer</p>
          <div className="dotted-design" style={{ }}>
            <div className="dot">  </div>
            <div className="dot">  </div>
          </div>
        </div>

        <div className="card1">
          <div className="dotted-design" style={{ top: 9}}>
            <div className="dot">  </div>
            <div className="dot">  </div>
          </div>
          <img src="/imgs/developers/LOKESH-J IMG.png" width="230" style={{borderRadius:"20px"}}></img>
          <p>LOKESH J</p>
          <p>Web Developer</p>
          <div className="dotted-design" style={{ }}>
            <div className="dot">  </div>
            <div className="dot">  </div>
          </div>
        </div>

        <div className="card1">
          <div className="dotted-design" style={{ top: 9}}>
            <div className="dot">  </div>
            <div className="dot">  </div>
          </div>
          <img src="/imgs/developers/LOKESH-J IMG.png" width="230" style={{borderRadius:"20px"}}></img>
          <p>LOKESH J</p>
          <p>Web Developer</p>
          <div className="dotted-design" style={{ }}>
            <div className="dot">  </div>
            <div className="dot">  </div>
          </div>
        </div>
        </div>

             {/* coordinator */}
      <h1 className="count-h">COORDINATORS</h1>
      <div className="grid-services2" style={{ position: 'relative' }}>
        <div className="card2">
          <div className="dotted-design" style={{ top: 9}}>
            <div className="dot">  </div>
            <div className="dot">  </div>
          </div>
          <img src="/imgs/developers/LOKESH-J IMG.png" width="230" style={{borderRadius:"20px"}}></img>
          <p>LOKESH J</p>
          <p>Web Developer</p>
          <div className="dotted-design" style={{ }}>
            <div className="dot">  </div>
            <div className="dot">  </div>
          </div>
        </div>

        <div className="card2">
          <div className="dotted-design" style={{ top: 9}}>
            <div className="dot">  </div>
            <div className="dot">  </div>
          </div>
          <img src="/imgs/developers/LOKESH-J IMG.png" width="230" style={{borderRadius:"20px"}}></img>
          <p>LOKESH J</p>
          <p>Web Developer</p>
          <div className="dotted-design" style={{ }}>
            <div className="dot">  </div>
            <div className="dot">  </div>
          </div>
        </div>

        <div className="card2">
          <div className="dotted-design" style={{ top: 9}}>
            <div className="dot">  </div>
            <div className="dot">  </div>
          </div>
          <img src="/imgs/developers/LOKESH-J IMG.png" width="230" style={{borderRadius:"20px"}}></img>
          <p>LOKESH J</p>
          <p>Web Developer</p>
          <div className="dotted-design" style={{ }}>
            <div className="dot">  </div>
            <div className="dot">  </div>
          </div>
        </div>

        <div className="card2">
          <div className="dotted-design" style={{ top: 9}}>
            <div className="dot">  </div>
            <div className="dot">  </div>
          </div>
          <img src="/imgs/developers/LOKESH-J IMG.png" width="230" style={{borderRadius:"20px"}}></img>
          <p>LOKESH J</p>
          <p>Web Developer</p>
          <div className="dotted-design" style={{ }}>
            <div className="dot">  </div>
            <div className="dot">  </div>
          </div>
        </div>
        </div>
  

    {/* Conatct Info */}
    <h1 className="count-h">CONTACT US</h1>
    <Contact />
  </div>
  );
}

export default Home;
