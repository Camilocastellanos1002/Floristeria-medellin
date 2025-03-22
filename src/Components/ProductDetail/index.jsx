import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';
import { useContext } from 'react';

function ProductDetail() {

  const context = useContext(ShoppingCartContext); //leer el estado global del carrito
    // console.log(context.productToShow);
  
  return (

    //forma de agregar logica al modal de detalle de producto
    <aside 
      className={`${context.isProductDetailOpen ? 'grid' : 'hidden'} grid-rows-2 m-1 p-2 justify-center fixed top-50 bottom-30 left-160 right-160 bg-white opacity-85 shadow-2xl rounded-lg flex-nowrap`}>
      <section className='flex flex-nowrap fixed p-2 items-center justify-between m-2 w-xs bg-black shadow-2xl rounded-lg '>
        <h2 className='font-medium text-xl text-rose-500'>Descripción</h2>
        <div>
          <XMarkIcon 
            className={` h-6 w-6 text-white cursor-pointer`}
            onClick={()=>{
              context.closeProductDetail()
            }}/>
        </div>
      </section>
      <figure className='w-full h-full px-3 py-3 mt-10'>
        <img 
          className='w-full h-full rounded-xl px-20' 
          src={context.productToShow.image} alt={context.productToShow.title}>
        </img>
        <p className='flex flex-col p-3 gap-2'>
          <span className='font-medium text-2xl text-rose-500'>${context.productToShow.price}</span>
          <span className='font-medium text-md'>{context.productToShow.title}</span>
          <span className='font-light text-sm justify-center'>{context.productToShow.description}</span>
        </p>
      </figure>
    </aside>
  );
}

export { ProductDetail };