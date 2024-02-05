import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemListContainer from './ItemListContainer'  


function App() {
  return (
    <div className="app">
      <header>
        <h1>Mi Aplicación</h1>
      </header>
      <main>
        <ItemListContainer greeting="¡Hola, mundo!" />
      </main>
    </div>
  );
}

export default App;
