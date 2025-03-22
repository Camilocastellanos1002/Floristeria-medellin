import {Layout} from '../../Components/Layout';
import { useContext } from "react";
import { ShoppingCartContext } from '../../Context';
import { OrderList } from '../../Components/OrderList';
import { Link } from 'react-router-dom';


// your purchases page permite ver las compras realizadas
function YourPurchases() {

    const context = useContext(ShoppingCartContext); //leer el estado global del carrito
    // console.log(context.order);
    
    return (
        <>
            <h1 className='flex justify-center items-center text-3xl text-rose-500 font-bold p-3 mt-25'>¡Mira tus compras!</h1>
            <Layout>
                <section className='flex text-white items-center justify-center gap-3 relative w-80 mt-3 mb-3'>
                    <h1 className='font-medium text-xl'>{context.order.length} Compra/s</h1>
                </section>
                    {
                        // se mapea el estado global de las compras
                        context.order.map(
                            (order,index) => (
                                //de linkea a la página de detalle de la compra
                                <Link key={index} to={`/your-purchases/${index}`}>
                                    <OrderList
                                    totalPrice ={order.totalPrice}
                                    totalProducts={order.totalProducts}
                                />
                                </Link>
                            )
                        )
                    }
            </Layout>
        </>
    );
}

export {YourPurchases}