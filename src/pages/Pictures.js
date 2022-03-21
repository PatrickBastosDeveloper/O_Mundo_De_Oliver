import React from 'react';
import '../styles/Pictures.css';

export default function Pictures({history}) {
  return (
    <div className='container-album'>
      <h1>Álbum</h1>
      <button type="button" onClick={()=> history.push('/')}>Página inicial</button>
    </div>
  );
}
