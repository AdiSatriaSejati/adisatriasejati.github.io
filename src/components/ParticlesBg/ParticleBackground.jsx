import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./particle-config";

export default function ParticleBackground() {
  return (
    <Particles id="particles" className="particles-css" options={particlesConfig} />
  );
}