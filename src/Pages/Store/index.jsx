import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function Store (){

    const context = useContext(ShoppingCartContext)

    //vista que depende de si deseas generar una busqueda o no
    const renderView = 
        ()=>{
        if (context.filteredItems?.length > 0) {
            return (
                <section className="grid grid-cols-3 place-items-center gap-4 w-full max-w-screen-xl">
                    {context.filteredItems?.map(
                        (item) => (
                            <Card key={item.id} data={item}/>
                        )
                    )}
                </section>    
            )
        }else{
            return (
                <section className='flex flex-row justify-center items-center text-white p-2 font-bold text-3xl'>
                    No encontramos el producto que buscas!
                </section>
            )
        }
    }

    return (
        <Layout className='Store'>
            <section className='flex text-white items-center justify-center gap-3 relative w-80 mb-6 '>
                <h1 className='message font-medium text-xl'>Bienvenido!</h1>
            </section>
            <section>
                <input 
                    type='text'
                    placeholder='busca tu producto'
                    className=' border border-white rounded-lg m-3 p-3 w-80 focus:outline-red-500'
                    onChange={ //evento para capturar lo que ingrese
                        (evento)=>{
                            context.setSearchByTitle(evento.target.value)
                        }
                    }/>
            </section>
                {renderView()}
            <ProductDetail/>
        </Layout>    
    );
}

export {Store}