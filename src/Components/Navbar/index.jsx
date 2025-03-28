import { NavLink } from "react-router-dom";
import React from "react";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartIcon, Bars4Icon} from '@heroicons/react/24/solid'

function Navbar() {

    const activeStyle = 'underline underline-offset-4 decoration-2 decoration-rose-500'
    const activeStyle2 = 'bg-gradient-to-b bg-rose-500 text-lg font-bold text-white p-2 rounded-lg drop-shadow-2xl gap-2'
    // const activeStyle2 = 'bg-gradient-to-b bg-rose-500 from-opacity-5 via-rose-400 to-gray-300 to-opacity-5 text-lg font-bold text-white p-2 rounded-lg drop-shadow-2xl gap-2'
  

    const context = useContext(ShoppingCartContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
     <>
        <nav className='flex justify-between flex-nowrap items-center fixed z-10 top-0 w-full py-1 px-1 text-5m font-light bg-white'>
            <section className='flex items-center gap-2'>
                <NavLink to='/'>
                  <img src='/src/assets/logo.png' width='100' alt='' className='hover:scale-110'/>    
                </NavLink>
                <Bars4Icon 
                    className='h-6 w-6 text-rose-500 cursor-pointer ml-2 mt-3'
                    onClick={toggleMenu}>
                </Bars4Icon>
            </section>
            {isOpen && (
                <section className={`fixed top-30 left-0 h-80 w-64 bg-white shadow-2xl p-5 border rounded-lg border-white transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                    <ul className={`absolute left-0 top-0 w-full h-80 bg-white shadow-md p-5 border rounded-lg border-white transition-transform duration-1000 ease-in-out ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                        <li>
                            <NavLink
                                to='/store'
                                onClick={ ()=>{context.setSearchByCategory()}}
                                className={
                                    ({isActive})=>
                                        isActive ? activeStyle : undefined
                                }>
                                Todos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/store/amor-y-romance'
                                onClick={ ()=>{context.setSearchByCategory('amor-y-romance')}}
                                className={
                                    ({isActive})=>
                                        isActive ? activeStyle : undefined
                                }>
                                Amor y Romance
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/store/cumpleaños'
                                onClick={ ()=>{context.setSearchByCategory('cumpleaños')}}
                                className={
                                    ({isActive})=>
                                        isActive ? activeStyle : undefined
                                }>
                                Cumpleaños
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/store/aniversario'
                                onClick={ ()=>{context.setSearchByCategory('aniversario')}}
                                className={
                                    ({isActive})=>
                                        isActive ? activeStyle : undefined
                                }>
                                Aniversario
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/store/condolencias'
                                onClick={ ()=>{context.setSearchByCategory('condolencias')}}
                                className={
                                    ({isActive})=>
                                        isActive ? activeStyle : undefined
                                }>
                                Condolencias
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/store/grados'
                                onClick={ ()=>{context.setSearchByCategory('grados')}}
                                className={
                                    ({isActive})=>
                                        isActive ? activeStyle : undefined
                                }>
                                Grados
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/store/simplemente-por-que-si'
                                onClick={ ()=>{context.setSearchByCategory('simplemente-por-que-si')}}
                                className={
                                    ({isActive})=>
                                        isActive ? activeStyle : undefined
                                }>
                                Simplemente por que sí
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/store/dia-de-la-madre'
                                onClick={ ()=>{context.setSearchByCategory('dia-de-la-madre')}}
                                className={
                                    ({isActive})=>
                                        isActive ? activeStyle : undefined
                                }>
                                Dia de la Madre
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/store/dia-del-padre'
                                onClick={ ()=>{context.setSearchByCategory('dia-del-padre')}}
                                className={
                                    ({isActive})=>
                                        isActive ? activeStyle : undefined
                                }>
                                Dia del Padre
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/store/desayunos'
                                onClick={ ()=>{context.setSearchByCategory('desayunos')}}
                                className={
                                    ({isActive})=>
                                        isActive ? activeStyle : undefined
                                }>
                                Desayunos
                            </NavLink>
                        </li>
                    </ul>
                </section>
            )} 
            <ul className='flex items-center gap-2 '>
                <li>
                    <NavLink 
                        to={'/contact-us'}
                        className={
                            ({isActive})=>
                                isActive ? activeStyle2 : undefined
                        }>
                        Contactanos
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={'/satisfied-customers'}
                        className={
                            ({isActive})=>
                                isActive ? activeStyle2 : undefined
                        }
                    >
                        Clientes satisfechos
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={'/register'}
                        className={
                                ({isActive})=>
                                    isActive ? activeStyle2 : undefined
                            }>
                        Registrate
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={'/sign-in'}
                        className={
                                ({isActive})=>
                                    isActive ? activeStyle2 : undefined
                            }>
                        Sign in
                    </NavLink>
                </li>
                <li>
                    <NavLink
                      to={'/store'}
                      className={
                              ({isActive})=>
                                  isActive ? activeStyle2 : undefined
                            }>
                        Tienda
                    </NavLink>
                </li>
                <li>
                    <NavLink
                      to={'/your-purchases'}
                      className={
                              ({isActive})=>
                                  isActive ? activeStyle2 : undefined
                            }>
                        Tus Compras
                    </NavLink>
                </li>
                <li className='flex items-center justify-center'>
                    <NavLink to={'/shopping-cart'}>
                        <ShoppingCartIcon 
                            className='h-6 w-6 text-rose-500 cursor-pointer'/>
                    </NavLink>
                    <span>
                        {context.cardProducts.length}
                    </span>
                </li>
            </ul>
        </nav>
     </>
    );
}

export {Navbar};