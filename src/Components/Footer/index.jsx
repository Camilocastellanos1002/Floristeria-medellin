import { NavLink } from "react-router-dom";
import { Layout } from "../Layout";

function Footer (){

    return(
        <>
            <Layout>
                <section className="mt-5">
                    <section className="flex justify-between gap-3 items-center text-white font-semibold">
                        <NavLink  to={'/'}>
                            <h3>Acerca de nosotros</h3>
                        </NavLink>
                        <NavLink to={'/'}>
                            <h3>Teminos legales</h3>
                        </NavLink>
                        <NavLink to={'/'}>
                            <h3>Acerca de nosotros</h3>
                        </NavLink>
                    </section>
                    <section className="flex justify-center items-center m-3 gap-3">
                        <NavLink to={'https://www.facebook.com/FloristeriaMedellinCol'} target="_blank">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 text-rose-500" fill="none" stroke="currentColor" 
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                                </svg>
                            </div>
                        </NavLink>
                        <NavLink to={'https://www.instagram.com/floristeria.medellin/'} target="_blank">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 text-rose-500" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
                                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                    <path d="M16.5 7.5l0 .01"></path>
                                </svg>
                            </div>
                        </NavLink>
                        <NavLink to={'https://api.whatsapp.com/send?phone=573005267555&text=Quisiera%20cotizar%20un%20Arreglo%20Floral%20%F0%9F%92%90'} target="_blank">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 text-rose-500" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
                                </svg>
                            </div>
                        </NavLink>
                        <NavLink to={'https://www.tiktok.com/@floristeria.medellin1'} target="_blank"> 
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 text-rose-500" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z"></path>
                                </svg>
                            </div>
                        </NavLink>
                    </section>
                    <section className="flex justify-center items-center font-medium text-white"> CopyRight © 2025, Medellín, Colombia.</section>
                </section>
            </Layout>
        </>
    );
}

export {Footer}