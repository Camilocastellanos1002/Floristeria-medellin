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
        //se renderiza el layout de la página
        <Layout>
            <section className='flex text-white items-center justify-center gap-3 relative w-80 mb-6'>
                <h1 className='font-medium text-xl'>Tus Compras Realizadas!</h1>
            </section>
            {/* se renderiza el título de la página */}
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
    );
}

export {YourPurchases}