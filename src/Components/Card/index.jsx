import { useContext} from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'


function Card (data){

    const context = useContext(ShoppingCartContext); //leer el estado global del carrito

    const showProductDetail = 
        (ProductDetail) => { //función para abrir el modal de detalle de producto
        context.openProductDetail();
        context.setProductToShow(ProductDetail);
    }

    const addProductToCart =
        (event, productData)=>{
        event.stopPropagation(); //se detiene la propagación del evento

        context.setCount(context.count + 1); //se aumenta el contador del carrito
        context.setCardProducts([...context.cardProducts, productData]); //se agrega el producto seleccionado al carrito
        context.openShoppingMenu(); //se abre el modal del shopping cart
        context.closeProductDetail(); //se cierra el modal de detalle de producto para que no se cruce el modal de detalle de producto con el modal del shopping cart
        // console.log(productData);
        // console.log(context.cardProducts); 
    }
    //se crea la función para renderizar el icono de agregar al carrito
    const renderIcon =
        (id)=>{  
        //se crea la variable para saber si el producto ya se encuentra en el carrito
        const isInCart = context.cardProducts.filter(product => product.id === id).length > 0;

        //se crea la condición para renderizar el icono de agregar al carrito o el icono de check
        if (isInCart) {
            //si esta en el carrito se renderiza el icono de check
            return(
                <div 
                    className='absolute top-1 right-1  flex justify-center items-center m-1 bg-rose-500 w-7 h-7 rounded-full p-2 text-white'>
                    <CheckIcon className='h-6 w-6 text-white'></CheckIcon> 
                </div>
            )
        } else {
            //si no esta en el carrito se renderiza el icono de agregar al carrito
            return(
                <div 
                    className='absolute top-1 right-1  flex justify-center items-center m-1 bg-white w-7 h-7 rounded-full p-2 text-black'
                        //se crea el evento en el que al dar click se aumenta el contador del carrito
                        onClick={
                            (event) => addProductToCart(event,data.data)
                        }>
                    <PlusIcon className='h-6 w-6 text-black'></PlusIcon> 
                </div>
            )
        }      
    }
    return (
        <>
            <section 
                className='card-container bg-white cursor-pointer w-86 h-110 mt-1 rounded-lg mb-5'
                onClick={
                    () => showProductDetail(data.data) //se crea el evento en el que al dar click se abre el modal de detalle de producto
                }>
                <figure className='relative mb-5 w-full h-4/5'>
                    <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0.5'>{data.data.category.name}</span>
                    <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt="x"></img>
                    {renderIcon(data.data.id)}
                    {/* <div className='absolute top-8 right-0 flex justify-center items-center mt-1 mr-1 bg-white w-6 h-6 rounded-full p-2 text-black'>?</div> */}
                </figure>
                <p className='flex justify-between'> 
                    <span className='text-2 font-bold text-rose-500 p-3'>{data.data.title}</span>
                    <span className='font-medium text-black p-3'>${data.data.price}000</span>
                </p>
            </section>
        </>
    );
}

export {Card}