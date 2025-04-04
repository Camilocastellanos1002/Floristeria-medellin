import { useState } from "react";
import { TrashIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/solid"

function OrderCard({id,title, imageURL, price , handleDelete}){

    //estado para controlar la cantidad de productos
    const [quantity, setQuantity] = useState(1);

    //función para aumentar la cantidad de productos
    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    //función para disminuir la cantidad de productos
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    //renderizado condicional del icono de basura
    let renderTrashIcon;
    let renderMinusIcon;
    let renderPlusIcon;
    let renderCounterIcon;
    //si la función handleDelete existe, entonces renderizar el icono de basura
    if (handleDelete) {
        renderTrashIcon =  <TrashIcon className={`h-6 w-6 text-rose-500 cursor-pointer `} onClick={ ()=>{ handleDelete(id); }}/>;
        renderPlusIcon =  <PlusIcon className='h-6 w-6 text-rose-500 cursor-pointer' onClick={handleIncrease}/>;
        renderMinusIcon =  <MinusIcon className='h-6 w-6 text-rose-500 cursor-pointer' onClick={handleDecrease}/>;
        renderCounterIcon= 
            <div className='border rounded px-2 py-1'>
                <p className='text-lg font-medium border-rose-500 text-rose-500'>{quantity}</p>
            </div>
    }

    return(
        <section className='flex justify-between items-center mb-3 gap-5'>
            <section className="flex items-center gap-2">
                <figure className='w-20 h-20'>
                    <img src={imageURL} alt={title} className='w-full h-full rounded-lg object-cover'></img>
                </figure>
                <p className='text-sm font-light flex-nowrap'>{title}</p>
            </section>
            <section className="flex items-center gap-2">
                
                {renderMinusIcon}
                {renderCounterIcon}
                {renderPlusIcon}
                <p className='text-lg font-medium'>$ {price * quantity}</p>
                { renderTrashIcon }
            </section>
        </section>
    )
}
export {OrderCard}