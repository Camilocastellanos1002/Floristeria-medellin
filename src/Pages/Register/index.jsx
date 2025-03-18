import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
function Register (){
    const context = useContext(ShoppingCartContext)
    return (
        <>
            context
            <Layout className='register'>
                <p className='message bg-rose-500'>Registrate!</p>
            </Layout>    
        </>
    );
}

export {Register}