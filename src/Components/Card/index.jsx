import { useContext} from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from '@heroicons/react/24/solid'


function Card (data){

    const context = useContext(ShoppingCartContext); //leer el estado global del carrito

    return (
        <>
            <section className='card-container bg-white cursor-pointer w-86 h-110 mt-1 rounded-lg mb-5'>
                <figure className='relative mb-5 w-full h-4/5'>
                    <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0.5'>{data.data.category.name}</span>
                    <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt="x"></img>
                    <div 
                        className='absolute top-1 right-1  flex justify-center items-center m-1 bg-white w-7 h-7 rounded-full p-2 text-black'
                            //se crea el evento en el que al dar click se aumenta el contador del carrito
                            onClick={
                                () => context.setCount(context.count + 1)} 
                    >
                        <PlusIcon className='h-6 w-6 text-black'></PlusIcon> 
                    </div>
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