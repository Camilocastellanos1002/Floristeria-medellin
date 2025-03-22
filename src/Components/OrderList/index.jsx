import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid"

function OrderList({ totalPrice, totalProducts}){
    return(
        <>
            {/* <h1 className='flex justify-center items-center text-3xl text-rose-500 font-bold p-3 mt-25'>¡Echa un viztazo!</h1> */}
            <section className='flex justify-between items-center mb-4 gap-5 border  border-white  rounded-lg p-4 w-80'>
                <section className='flex justify-between text-sm font-light flex-nowrap w-full'>
                    <p className='flex flex-col'>
                        <span className='font-light'>14-03-2025</span>
                        <span className='font-light'>
                            {totalProducts ===1 ? `${totalProducts} articulo` : `${totalProducts} articulos`}
                        </span>
                    </p>
                    <p className='flex items-center gap-2'>
                        <span className='font-medium text-2xl'>${totalPrice}</span>
                        <ChevronRightIcon className='h-6 w-6 cursor-pointer text-black'/>
                    </p>
                </section>
            </section>
        </>
    );
}

export {OrderList}
