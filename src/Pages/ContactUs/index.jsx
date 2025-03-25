import { Layout } from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Footer } from "../../Components/Footer";
import contactUsImage from '../../assets/contactus.png';

function ContactUs(){
    const context = useContext(ShoppingCartContext);

    return (
        <>
            <h1 className='flex justify-center items-center text-3xl text-rose-500 font-bold p-3 mt-25'>¡Hola! Escribenos cualquier inquietud</h1>
            <Layout className='bg-white'>
                <section className='grid grid-cols-2 gap-5 p-3 m-3'>
                    <section>
                        <form className="grid w-150 h-120 mt-5 bg-white rounded-2xl p-2">
                            <h3 className="font-bold text-rose-500">Tu nombre</h3>
                            <input id="nombre_mensaje" type="text" name="Tu nombre" placeholder="Escribe tu nombre" className="border rounded-xl border-rose-500 m-2"/>
                            <h3 className="font-bold rounded-2xl p-1 text-rose-500">Tu correo</h3>
                            <input id="correo_mensaje" type="email" name="Correo" placeholder="Escribe tu correo" className="border rounded-xl border-rose-500 m-2"/>
                            <h3 className="font-bold rounded-2xl p-1 text-rose-500">Dejanos un mensaje</h3>
                            <input id="el_mensaje" type="text" name="Mensaje" placeholder="Escribe tu mensaje" maxLength="300" className="border rounded-xl border-rose-500 m-2" />
                        </form>
                    </section>
                    <section className="flex flex-col justify-center items-center">
                        <img src={contactUsImage} alt="contactus" className="w-1/2 mx-auto"/>
                        <button id="btn_enviar_mensaje" className="bg-white px-20 py-4 rounded-2xl text-rose-500 font-extrabold">Envia tu mensaje</button>
                    </section>
                </section>
            </Layout>
            <section className="fixed bottom-0 left-0 w-full">
                <Footer/>   
            </section>
        </>
    )
}

export {ContactUs}