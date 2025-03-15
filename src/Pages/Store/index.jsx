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
            if (context.searchByTitle?.length >0) {
                if (context.filteredItems?.length > 0) {
                    return (
                        context.filteredItems?.map(
                            (item) => ( //forma de realizar un return directo
                                //React obliga a generar un identificador "key"
                                <Card key={item.id} data={item}/>
                            )
                        )
                    )
                }else{
                    return (
                        <section>
                            No encontramos el producto que buscas!
                        </section>
                    )
                }
            }else{
                return (
                    context.items?.map(
                        (item) => ( //forma de realizar un return directo
                            //React obliga a generar un identificador "key"
                            <Card key={item.id} data={item}/>
                        )
                    )
                )
            }
    }

    return (
        <>
            <Layout className='Home'>
                <section className='flex text-white items-center justify-center gap-3 relative w-80 mb-6'>
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
                <section className="grid grid-cols-3 place-items-center gap-4 w-full max-w-screen-xl">
                    {renderView()}
                </section>
                <ProductDetail/>
            </Layout>    
        </>
    );
}

export {Store}