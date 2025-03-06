import { XMarkIcon } from '@heroicons/react/24/solid'

function ProductDetail() {
  return (

    <aside className=' flex justify-center fixed top-60 left-120 right-120 bottom-40 bg-white opacity-85 shadow-2xl rounded-lg'>
      <section className='flex justify-around items-center gap-70 fixed p-2'>
        <h2 className='font-medium text-xl'>Descripción</h2>
        <div>
          <XMarkIcon className='h-6 w-6 text-black'/>
        </div>
      </section>
    </aside>
  );
}

export { ProductDetail };