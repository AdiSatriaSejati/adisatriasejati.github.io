import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleHeaderBg() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
      return (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          className={`particles-2-css ${theme}`}
          options={{
            background: {
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
            },
            fullScreen: {
              enable: false
            },
            interactivity: {
              
              detect_on: "window",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                repulse: {
                  distance: 70,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
              },
            },
            particles: {
              number: {
                value: 75,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"],
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#fff",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 1,
                random: false,
                anim: {
                  enable: false,
                  speed: 2,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 8,
                random: true,
                anim: {
                  enable: false,
                  speed: 10,
                  size_min: 10,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#808080",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            retina_detect: true,
          }}
        ></Particles>
      );
}
