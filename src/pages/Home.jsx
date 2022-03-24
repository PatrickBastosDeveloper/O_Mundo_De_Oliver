import React, { useContext } from 'react';
import context from '../contextApi/context';
import '../styles/Home.css';

export default function Home({history}) {
  
  const { nameVisitants } = useContext( context )
  console.log(nameVisitants);

  return (
    
    <div className='container-home'>
      <p></p>
      <h1>{`Olááá!${ nameVisitants }`}<br/> Bem vindo ao Mundo De Oliver.</h1>
      <button
        type="button"
        onClick={ () => history.push( '/pictures' ) }
      > Minhas fotos
      </button>
    </div>
  );
}
