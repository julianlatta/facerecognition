import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
   return (
      <div>
         <p className='f3'>
            {'This App will detect faces in your images. Submit an image link and give it a try!'}
         </p>
         <div className='center'>
            <div className='form pa4 br3 shadow-1'>
               <input className='f4 pa2 w-70% center' placeholder="Submit URL" type='text' onChange={onInputChange}/>
               <button 
                  className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                  onClick={onButtonSubmit}
               >Detect</button>
            </div>
         </div>
      </div>
   );
}

export default ImageLinkForm;