import { NavLink } from "react-router-dom";
import React from "react";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartIcon, Bars4Icon} from '@heroicons/react/24/solid'
// import { ReactComponent  as Logo } from '../../assets/logo.png';

function Navbar() {
    // const {
    //     openModal,
    //     setOpenModal
    // } = React.useContext(TheContext);

    const activeStyle = 'underline underline-offset-4'

    const context = useContext(ShoppingCartContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
     <>
        <nav className='flex justify-between flex-nowrap items-center fixed z-10 top-0 w-full py-1 px-1 text-5m font-light'>
            <section className='flex items-center gap-2'>
                <NavLink to='/'>
                  <img src='/src/assets/logo.png' width='100' alt='' />    
                </NavLink>
                <Bars4Icon 
                    className='h-6 w-6 text-rose-500 cursor-pointer ml-2 mt-3'
                    onClick={toggleMenu}>
                </Bars4Icon>
            </section>
            {isOpen && (
                <section className={`fixed top-30 left-0 h-200 w-64 bg-white shadow-2xl p-5 border rounded-lg border-white transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                    <ul className={`absolute left-0 top-0 w-full h-full bg-white shadow-md p-5 border rounded-lg border-white transition-transform duration-1000 ease-in-out ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                        <li>
                            <NavLink
                                to='/amor-y-romance'
                                className={
                                    ({isActive})=>
                                        isActive ? activeStyle : undefined
                                }>
                                Amor y Romance
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/cumpleaños'
                                className={
                                    ({isActive})=>
                                        isActive ? activeStyle : undefined
                                }>
                                Cumpleaños
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/aniversario'
                                className={
                                    ({isActive})=>
                                        isActive ? activeStyle : undefined
                                }>
                                Aniversario
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/condolencias'
                                className={
                                    ({isActive})=>
                                        isActive ? activeStyle : undefined
                                }>
                                Condolencias
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/grados'
                                className={
                                    ({isActive})=>
                                        isActive ? activeStyle : undefined
                                }>
                                Grados
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/desayunos'
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
            <ul className='flex items-center gap-2'>
                <li>
                    <NavLink 
                        to={'/contact-us'}
                        className={
                            ({isActive})=>
                                isActive ? activeStyle : undefined
                        }>
                        Contactanos
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={'/satisfied-customers'}
                        className={
                            ({isActive})=>
                                isActive ? activeStyle : undefined
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
                                    isActive ? activeStyle : undefined
                            }>
                        Registrate
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={'/sign-in'}
                        className={
                                ({isActive})=>
                                    isActive ? activeStyle : undefined
                            }>
                        Sign in
                    </NavLink>
                </li>
                <li>
                    <NavLink
                      to={'/your-purchases'}
                      className={
                              ({isActive})=>
                                  isActive ? activeStyle : undefined
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
                        {context.count}
                    </span>
                </li>
            </ul>
        </nav>
     </>
    );
}

export {Navbar};