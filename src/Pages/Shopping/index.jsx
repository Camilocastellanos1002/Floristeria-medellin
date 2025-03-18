import { Layout } from "../../Components/Layout"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { OrderCard } from "../../Components/OrderCard"
import { Link } from "react-router-dom"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"


function Shopping(){

    const context = useContext(ShoppingCartContext);
    const currentPath = window.location.pathname;
    // console.log(currentPath);
    let index = currentPath.substring(currentPath.lastIndexOf('/')+1) //este elemento permite identificar cada una de las ordenes realizadas
    // console.log(index);
    if (index == 'last') index = context.order?.length - 1



    return (
        <Layout>
            <section className='flex text-white items-center justify-center gap-3 relative w-80 mb-6'>
                <Link to='/your-purchases' className='absolute left-0'>
                    <ChevronLeftIcon className='h-6 w-6 cursor-pointer'/>
                </Link>
                <h1>Tu Carrito de compras!</h1>
            </section>
            <section className='flex flex-col w-200 justify-center'>
                {
                    context.order && context.order.length > 0 && context.order?.[index]?.products.map(
                        (product)=>(
                                <section className='border-2 p-2 rounded-lg m-2 border-black' key={product.id}>
                                    <OrderCard
                                        id={product.id}
                                        title={product.title}
                                        imageURL={product.images}
                                        price={product.price}
                                />
                            </section>
                        )
                    )
            }
            </section>
        </Layout>
    )
}

export {Shopping}