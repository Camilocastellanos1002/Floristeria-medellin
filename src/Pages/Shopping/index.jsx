import { Layout } from "../../Components/Layout"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { OrderCard } from "../OrderCard"

function Shopping(){

    const context = useContext(ShoppingCartContext);
    // console.log(context.order);
    // console.log(context.order?.slice(-1)[0]);
    

    return (
        <Layout>
            <h1>Tu Carrito de compras!</h1>
            <section className='flex flex-col w-200 justify-center'>
                {
                //logica para mostrar la ultima orden, los ultimos productos añadidos al carrito
                context.order?.slice(-1)[0].products.map( //retorna el ultimo elemento del array, tomar la posicion 0
                    (product) => (
                        <section className='border-2 p-2 rounded-lg m-2 border-black'>
                            <OrderCard 
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageURL={product.images}
                            price={product.price}
                        />
                        </section>
                    ) 
                )}
            </section>
        </Layout>
    )
}

export {Shopping}