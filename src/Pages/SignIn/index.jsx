import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";

function SignIn(){
    const context = useContext(ShoppingCartContext)
    return(
        <>
            context
            <Layout className='sign-in'>
                <p className='message bg-rose-500'>Inicia sesion de nuestros clientes selectos</p>
            </Layout>    
        </>
    );
}

export {SignIn}