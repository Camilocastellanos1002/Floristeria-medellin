
function Card (){
    return (
        <>
            <section className='card-container bg-white cursor-pointer w-86 h-110 mt-1 rounded-lg mb-5'>
                <figure className='relative mb-5 w-full h-4/5'>
                    <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0.5'>Amor y Romance</span>
                    <img className='w-full h-full object-cover rounded-lg' src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQdAp_0QZJgCMWNvFd-lzlIFAsfDdZktv9HB-aKQ7krJFVxISOsw6Uspf6OgIhCVe05XjXa2-Ljf2OeP4BJWaWCO02hX1CIAMVz4R3U_bnhStl73nEZWN1Tt_ZDDdpKANwsbmkHDtkFIYdD7JjBUbmWfoGzjeN4-zF3fJ53U2XqtFbjcZNlzrAn1XexRM/s320/mi-gran-corazon.jpeg" alt="x"></img>
                    <div className='absolute top-0 right-0  flex justify-center items-center m-1 bg-white w-6 h-6 rounded-full p-2 text-black'>+</div>
                    <div className='absolute top-8 right-0 flex justify-center items-center mt-1 mr-1 bg-white w-6 h-6 rounded-full p-2 text-black'>?</div>
                </figure>
                <p className='flex justify-between'> 
                    <span className='text-2 font-bold text-rose-500 p-3'>Mi Gran Corazón</span>
                    <span className='font-medium text-black p-3'>$280.000</span>
                </p>
            </section>
        </>
    );
}

export {Card}