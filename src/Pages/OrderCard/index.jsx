import { XMarkIcon } from "@heroicons/react/24/solid"

function OrderCard({title, imageURL, price}){


    return(
        <section className='flex justify-between items-center mb-3'>
            <section className="flex items-center gap-2">
                <figure className='w-20 h-20'>
                    <img src={imageURL} alt={title} className='w-full h-full rounded-lg object-cover'></img>
                </figure>
                <p className='text-sm font-light flex-nowrap'>{title}</p>
            </section>
            <section className="flex items-center gap-2">
                <p className='text-lg font-medium'>${price}.000</p>
                <XMarkIcon 
                    className={` h-6 w-6 text-white cursor-pointer`}
                />
            </section>
        </section>
    )
}
export {OrderCard}