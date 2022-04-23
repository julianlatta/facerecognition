import Particles from 'react-tsparticles';
import particlesConfig from './Particles-config';

const ParticlesBackground = () => {
  return (
    <Particles params={particlesConfig} />
  );
}

export default ParticlesBackground;