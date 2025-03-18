import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";

function SatisfiedCustomers(){
    const context = useContext(ShoppingCartContext)
    return (
        <>
            context
            <Layout className='satisfied-costumers'>
                <p className='message bg-rose-500'>Mira y lee a nuestros clientes fieles y satisfechos!</p>
            </Layout>    
        </>
    );
}

export {SatisfiedCustomers}