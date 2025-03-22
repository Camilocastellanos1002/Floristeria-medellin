import { useContext } from 'react';
import { Link } from 'react-router-dom'; //importar el componente Link para enrutar 
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';
import {OrderCard} from '../OrderCard';
import { totalPrice } from '../../Utils';

function CheckoutMenu(){
    const context = useContext(ShoppingCartContext); //leer el estado global del carrito

    //función para eliminar un producto del carrito
    const handleDelete =
        (id)=>{
            const filteredProducts = context.cardProducts.filter(product => product.id !== id)
            context.setCardProducts(filteredProducts);
    }
    
    //función para agregar la orden de compra al carrito
    const handleCheckout = 
        () => {
        const orderToAdd ={
            date: new Date().toLocaleDateString(), //fecha de la compra
            products: context.cardProducts,
            totalProducts: context.cardProducts.length,
            totalPrice: totalPrice(context.cardProducts)
        }
        context.setOrder([...context.order, orderToAdd]); //agregar la orden al carrito
        context.setCardProducts([]); //vaciar el carrito
        context.setSearchByTitle(null)  //vaciar input de busqueda

    }
    return(
        //forma de agregar logica al modal de detalle de producto
        <aside 
        className={`${context.isShoppingMenuOpen ? 'grid' : 'hidden'} grid-rows m-2 p-3 justify-center fixed top-50 bottom-20 left-160 right-160 bg-white opacity-85 shadow-2xl rounded-lg flex-nowrap`}>
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
            <section className='flex-1 mt-15 px-2 overflow-y-scroll'>
                <section className='border-2 p-2 rounded-lg m-2 border-rose-500'>
                    {
                    context.cardProducts.map(  //logica para mappear los productos seleccionados que se encuentran añadiendo al carrito
                        (product) => (
                                <OrderCard 
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                imageURL={product.image}
                                price={product.price}
                                handleDelete = {handleDelete}
                                />
                        ) 
                    )}
                </section>
            </section>
            <section className='px-2'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cardProducts)}</span>
                </p>
                <Link to='/your-purchases/last'>
                    <button 
                        className='w-full bg-rose-500 text-white rounded-lg p-3 m-2 mb-6'
                        onClick={
                            ()=>{
                                handleCheckout();
                                context.closeShoppingMenu(); //cerrar el modal de detalle de carrito
                            }
                        }>Agregar al carrito!</button>
                </Link>
            </section>
        </aside>
    );
}

export {CheckoutMenu}