import { Layout } from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
function ContactUs(){
    const context = useContext(ShoppingCartContext);

    return (
        <>
            context
            <Layout className='bg-rose-500'>
                <p className='message text-black'>Contactanos!</p>
            </Layout>    
        
        </>
    )
}

export {ContactUs}