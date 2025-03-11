
function Layout ({children}){
    return (
        <>
            <section className='flex flex-col  items-center mt-28'>
                {children}
            </section>
        </>
    );

}

export {Layout}