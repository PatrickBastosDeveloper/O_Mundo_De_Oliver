import { useState } from 'react';
import context from './context';

export default function Provider({ children }) {
  const [ nameVisitants ] = useState( 'Lucas' )
  
  const state = {
    nameVisitants,
  }

  return (
    <context.Provider value={ state }>
      { children }
    </context.Provider>
  )
}
