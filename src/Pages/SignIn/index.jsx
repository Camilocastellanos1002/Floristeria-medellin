import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";

function SignIn(){
    const context = useContext(ShoppingCartContext)
    return(
        <>
            <h1 className='flex justify-center items-center text-3xl text-rose-500 font-bold p-3 mt-25'>¡Hola!</h1>
            <Layout className='sign-in'>
                <p className='message bg-rose-500'>Inicia sesion de nuestros clientes selectos</p>
            </Layout>    
        </>
    );
}

export {SignIn}