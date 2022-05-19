import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // loads tsparticles-slim
//import { loadFull } from 'tsparticles'; // loads tsparticles
import { useCallback, useMemo } from 'react';

const ParticlesComponent = () => {
   const options = useMemo(() => {
      return {
         fpsLimit: 60,
         interactivity: {
            detectsOn: "canvas",
            events: {
               onClick: {
                  enable: true,
                  mode: "push",
               },
               onHover: {
                  enable: true,
                  mode: "repulse"
               }
            },
            modes: {
               push: {
                  quantity: 5,
               },
               repulse: {
                  distance: 100,
               },
            },
         },
         particles: {
            links: { // Enables particle linking
               enable: true,
            },
            move: { // Enables particle movement
               enable: true,
               speed: { min: 1, max: 3 },
            },
            size: { // Enables randomization of particle size
               value: { min: 1, max: 3},
            },
            opacity: { //Enables randomization of particle opacity
               value: {min: 0.25, max: 0.55}
            },
            detectRetina: true,
         },
      };
   }, []);

   const particlesInit = useCallback((engine) => {
      loadSlim(engine);
   }, []);
   return <Particles init={particlesInit} options={options}/>
};

export default ParticlesComponent;