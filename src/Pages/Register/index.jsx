import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import { Footer } from "../../Components/Footer";

function Register (){
    const context = useContext(ShoppingCartContext)
    const inputStyle = 'border rounded-xl border-rose-500 m-2 mr-3 p-2'

    return (
        <>
            <h1 className='flex justify-center items-center text-3xl text-rose-500 font-bold p-3 mt-25'>¡En unos simples pasos, registrate!</h1>
            <Layout className=''>
                <section className='flex flex-col gap-5 p-3 m-3'>
                    <form className="grid w-150 h-120 mt-5 bg-white rounded-2xl p-2">
                        <section className="grid grid-cols-2 gap-2">
                            <section className="">
                                <h3 className="font-bold text-rose-500">Nombre</h3>
                                <input id="first_name" type="text" name="first_name" placeholder="Ingresa tu nombre" className={inputStyle}/>
                            </section>
                            <section>
                                <h3 className="font-bold text-rose-500">Apellido</h3>
                                <input id="last_name" type="text" name="last_name" placeholder="Ingresa tu apellido" className={inputStyle}/>
                            </section>
                        </section>
                        <h3 className="font-bold rounded-2xl p-1 text-rose-500">Usuario</h3>
                        <input id="username" type="text" name="username" placeholder="Ingresa un usuario" className={inputStyle}/>
                        <h3 className="font-bold rounded-2xl p-1 text-rose-500">Correo</h3>
                        <input id="email" type="email" name="email" placeholder="Ingresa tu correo" className={inputStyle}/>
                        <section className="grid grid-cols-2 gap-2">
                            <section>
                                <h3 className="font-bold text-rose-500">Ciudad</h3>
                                <input id="city" type="text" name="city" placeholder="Ingresa tu ciudad" className={inputStyle}/>
                            </section>
                            <section>
                                <h3 className="font-bold text-rose-500">Celular</h3>
                                <input id="phone" type="text" name="phone" placeholder="Ingresa tu celular" className={inputStyle}/>
                            </section>
                        </section>
                        <h3 className="font-bold rounded-2xl p-1 text-rose-500">Constraseña</h3>
                        <input id="password" type="password" name="password" placeholder="Ingresa una contraseña" maxLength="300" className={`${inputStyle}`}/>
                    </form>
                </section>
                <button id="btn_register" className="bg-white px-20 py-4 rounded-2xl text-rose-500 font-extrabold mb-2">Registrarte</button>
            </Layout>
            <section className="fixed bottom-0 left-0 w-full">
                <Footer/>   
            </section>
        </>
    );
}

export {Register}