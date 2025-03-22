import { Layout } from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
function ContactUs(){
    const context = useContext(ShoppingCartContext);

    return (
        <>
            <h1 className='flex justify-center items-center text-3xl text-rose-500 font-bold p-3 mt-25'>¡Hola!</h1>
            <Layout>
                <h2>Regalanos un mensaje!</h2>
                <p className='message text-black'>nuestro numero es!</p>
            </Layout>    
        
        </>
    )
}

export {ContactUs}