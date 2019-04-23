import React from 'react';
import './Header.css';


function ImageThumbnail() {
    return (
        <img src="./public/img/LSlogo.jpg" alt='Lambda School Logo Thumbnail'></img>
    )
}




export default ImageThumbnail

import React from 'react';
import './Header.css';

const ImageThumbnail = () => {
  return (
    <div className="thumb-wrapper">
      <img
        alt="lambda logo"
        className="thumb-img"
        src="https://ibin.co/3whrpKSBbZ81.png"
      />
    </div>
  );
};

export default ImageThumbnail;