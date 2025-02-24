import './App.css'
import {ContactUs} from '../ContactUs'
import {CreateArrangement} from '../CreateArrangement'
import {Register} from '../Register'
import {SatisfiedCustomers} from '../SatisfiedCustomers'
import {SeasonalAdvertising} from '../SeasonalAdvertising'
import {ShoppingCart} from '../ShoppingCart'
import {SignIn} from '../SignIn'
import {Store} from '../Store'
import { Loading } from '../Loading'
import { Empty } from '../Empty'


function App() {

  return (
    <>
      <section className='App'>
        <p className='message bg-rose-500'>Hola mundoo!</p>
        <ContactUs/>
        <CreateArrangement/>
        <Register/>
        <SatisfiedCustomers/>
        <SeasonalAdvertising/>
        <ShoppingCart/>
        <SignIn/>
        <Store/>


        <Loading/>
        {/* <Error/> */}
        <Empty/>

      </section>
    </>
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