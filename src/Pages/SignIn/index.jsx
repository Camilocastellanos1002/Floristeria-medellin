import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import { Footer } from "../../Components/Footer";

function SignIn(){
    const context = useContext(ShoppingCartContext)
    const inputStyle = 'border rounded-xl border-rose-500 m-2 mr-3 p-2'

    return(
        <>
            <h1 className='flex justify-center items-center text-3xl text-rose-500 font-bold p-3 mt-25'>Hola, ¡bienvenido!</h1>
            <Layout>
                <section className='flex flex-col gap-5 p-3 m-3'>
                    <form className="w-full h-full mt-5 bg-white rounded-2xl p-2">
                        <h3 className="font-bold rounded-2xl p-1 text-rose-500">Usuario</h3>
                        <input id="username" type="text" name="username" placeholder="Ingresa tu usuario" className={inputStyle}/>
                        <h3 className="font-bold rounded-2xl p-1 text-rose-500">Contraseña</h3>
                        <input id="password" type="password" name="password" placeholder="Ingresa tu contraseña" maxLength="300" className={`${inputStyle}`}/>
                    </form>
                </section>
                <button id="btn_sign_in" className="bg-white px-20 py-4 rounded-2xl text-rose-500 font-extrabold mb-2">Ingresar</button>
            </Layout>
            <section className="fixed bottom-0 left-0 w-full">
                <Footer/>   
            </section>  
        </>
    );
}

export {SignIn}