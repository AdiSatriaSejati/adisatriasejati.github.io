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
        await loadFull(main);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
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
                fpsLimit: 60,
                interactivity: {
                    detectsOn: "window",
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push"
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                            parallax: {
                                enable: true,
                                force: 60,
                                smooth: 10
                            }
                        },
                        resize: true
                    },
                    modes: {
                        push: {
                            quantity: 4
                        },
                        repulse: {
                            distance: 150,
                            duration: 0.4,
                            speed: 1
                        }
                    }
                },
                particles: {
                    color: {
                        value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
                    },
                    links: {
                        color: "#808080",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                        triangles: {
                            enable: false,
                            opacity: 0.05
                        }
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        random: false,
                        straight: false,
                        outModes: {
                            default: "out"
                        },
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    },
                    number: {
                        value: 50,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    opacity: {
                        value: 0.7,
                        random: false,
                        animation: {
                            enable: false
                        }
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        value: 6,
                        random: true,
                        animation: {
                            enable: false
                        }
                    }
                },
                detectRetina: true
            }}
        />
    );
}
