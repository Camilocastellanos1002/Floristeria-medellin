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
        <>
            <h1 className='flex justify-center items-center text-3xl text-rose-500 font-bold p-3 mt-30'>¡Mira tus productos!</h1>
            <Layout>
                <section className=' flex text-white items-center justify-center gap-3 relative w-80 mb-4'>
                    <Link to='/your-purchases'>
                        <ChevronLeftIcon className='h-6 w-6 cursor-pointer'/>
                    </Link>
                    <h1 className='font-medium text-xl mt-2'>Tu Carrito de compras!</h1>
                </section>
                <section className='flex flex-col w-200 justify-center text-black'>
                    {
                        context.order && context.order.length > 0 && context.order?.[index]?.products.map(
                            (product)=>(
                                    <section className='border-2 p-2 rounded-lg m-2 border-white' key={product.id}>
                                        <OrderCard
                                            id={product.id}
                                            title={product.title}
                                            imageURL={product.image}
                                            price={product.price}
                                    />
                                </section>
                            )
                        )
                }
                </section>
            </Layout>
        
        </>
    )
}

export {Shopping}