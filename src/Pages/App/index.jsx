
import { AppRoutes } from '../../Routes';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '../../Components/Navbar';
import { ShoppingCartProvider } from '../../Context';
import { CheckoutMenu } from '../../Components/CheckoutMenu';

import './App.css'
 {/* Encapsular el AppRoutes en BrowserRouter, para gue dependiendo del path se pueda visualizar la pagina deseada */}
function App() {
  return (
    <ShoppingCartProvider>
      <section className='App bg-rose-500'>
        <BrowserRouter>
          <AppRoutes/> 
          <Navbar/>
          <CheckoutMenu/>
        </BrowserRouter>
      </section>
    </ShoppingCartProvider>
  )
}

export default App

{/*  <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}