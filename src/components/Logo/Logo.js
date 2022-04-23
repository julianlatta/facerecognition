import React from 'react';
import Tilt from 'react-parallax-tilt';
import thinking from './thinking.png';
import './Logo.css';

const Logo = () => {
   return (
      <div className='ma4 mt0'>
         <Tilt className='Tilt' 
            tiltMaxAngleX={35}
            tiltMaxAngleY={35}
            style={{ height: '150px', width: '150px'}}>
            <div className='Tilt' style={{ height: '150px', width: '150px', backgroundColor: 'lightblue' }}>
               <img alt='logo' src={thinking}/>
            </div>
         </Tilt>
      </div>
   );
}

export default Logo;