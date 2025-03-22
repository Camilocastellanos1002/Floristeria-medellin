import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";

function SatisfiedCustomers(){
    const context = useContext(ShoppingCartContext)
    return (
        <>
            <h1 className='flex justify-center items-center text-3xl text-rose-500 font-bold p-3 mt-25'>¡Echa un viztazo!</h1>
            <Layout>
                <p className='message'>lee a nuestros clientes fieles y satisfechos!</p>
            </Layout>    
        </>
    );
}

export {SatisfiedCustomers}