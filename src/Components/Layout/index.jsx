
function Layout ({children}){
    return (
        <>
            <section className='flex flex-col  items-center mt-70'>
                {children}
            </section>
        </>
    );

}

export {Layout}