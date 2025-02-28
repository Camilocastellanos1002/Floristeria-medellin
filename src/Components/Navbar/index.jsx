import { NavLink } from "react-router-dom";
import { Menu } from "../../Components/Menu";
import React from "react";
// import { TheContext } from "../../Context";

import storeSVG from '../../assets/building-store.svg';



function Navbar() {
    // const {
    //     openModal,
    //     setOpenModal
    // } = React.useContext(TheContext);

    const activeStyle = 'underline underline-offset-4'

    return (
     <>
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-5m font-light'>
            <ul className='grid grid-template-rows items-center gap-2'>
                <Menu className='font-semibold'/>
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
                        to={'/shopping-cart'}
                        className={
                                ({isActive})=>
                                    isActive ? activeStyle : undefined
                            }>
                        <span>
                            <img src={storeSVG} alt="Tienda"/>
                            0
                        </span>
                    </NavLink>
                </li>
            </ul>
        </nav>
     </>
    );
}

export {Navbar};