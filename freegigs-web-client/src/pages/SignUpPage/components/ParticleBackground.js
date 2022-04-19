import React from "react";
import Particles from "react-tsparticles";
import ParticleConfig from "./ParticleConfig";

const ParticleBackground = () => {
  return (
    <Particles
      style={{ position: "absolute", left: "0", top: "0" }}
      params={ParticleConfig}
    ></Particles>
  );
};

export default ParticleBackground;
