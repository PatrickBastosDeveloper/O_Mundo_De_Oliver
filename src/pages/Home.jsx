import React from 'react';
import '../styles/Home.css';

export default function Home({history}) {
  return (
    <div className='container-home'>
      <p>Olá!</p>
      <h1>Bem vindo ao Mundo De Oliver</h1>
      <button type="button" onClick={()=> history.push('/pictures')}>Minhas fotos</button>
    </div>
  );
}
