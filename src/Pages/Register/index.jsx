import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
function Register (){
    const context = useContext(ShoppingCartContext)
    return (
        <>
            <h1 className='flex justify-center items-center text-3xl text-rose-500 font-bold p-3 mt-25'>¡En unos simples pasos, registrate!</h1>
            <Layout className='register'>
                <p className='message bg-rose-500'>Registrate!</p>
            </Layout>    
        </>
    );
}

export {Register}