import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';
import { OrderCard } from '../OrderCard';

function Shopping(){
    const context = useContext(ShoppingCartContext); //leer el estado global del carrito
    // console.log(context.cardProducts); 

    //función para eliminar un producto del carrito
    const handleDelete =
        (id)=>{
            const filteredProducts = context.cardProducts.filter(product => product.id !== id)
            context.setCardProducts(filteredProducts);
    }

    return(
        //forma de agregar logica al modal de detalle de producto
        <aside 
        className={`${context.isShoppingMenuOpen ? 'grid' : 'hidden'} grid-rows m-1 p-2 justify-center fixed top-50 bottom-30 left-160 right-160 bg-white opacity-85 shadow-2xl rounded-lg flex-nowrap`}>
            <section className='flex flex-nowrap fixed p-2 items-center justify-between m-2 w-xl bg-black shadow-2xl rounded-lg '>
                <h2 className='font-medium text-xl text-rose-500'>Tus articulos!</h2>
                <div>
                <XMarkIcon 
                    className={`h-6 w-6 text-white cursor-pointer`}
                    onClick={()=>{
                    context.closeShoppingMenu()
                    }}/>
                </div>
            </section>
            <section className='mt-15 px-6 overflow-y-scroll'>
                {
                context.cardProducts.map(  //logica para mappear los productos seleccionados que se encuentran añadiendo al carrito
                    (product) => (
                        <OrderCard  
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageURL={product.images}
                            price={product.price}
                            handleDelete = {handleDelete}
                        />
                    ) 
                )}
            </section>
        </aside>
);
}

export {Shopping}