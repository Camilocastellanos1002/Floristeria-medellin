
function Layout ({children}){
    return (
        <>
            <section className='flex flex-col  items-center bg-rose-500 mt-2'>
                {children}
            </section>
        </>
    );

}

export {Layout}