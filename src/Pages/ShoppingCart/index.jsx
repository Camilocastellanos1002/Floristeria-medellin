import { Layout } from "../../Components/Layout";

function ShoppingCart(){
    return(
        <>
            <Layout className='shopping-cart'>
                <p className='message bg-rose-500'>Este es tu carro de compras!</p>
            </Layout>    
        </>
    );
}

export {ShoppingCart}