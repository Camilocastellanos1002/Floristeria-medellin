import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import React, {useState, useEffect} from 'react'
import { ApiURL } from "../../Components/Api";
import { ProductDetail } from "../../Components/ProductDetail";

function Store (){


    const [items, setItems] = useState(null);

    useEffect(
        ()=>{
            //llamar la funcion ApiURL
            try {
                fetch(ApiURL())
                .then(
                    (response) => { //forma de realizar un return de datos
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json()
                    }  
                )
                .then(  
                    //se retorna el valor de forma directa
                    (data) => setItems(data)
                )
                .catch(
                    (error) => console.log('error: '+ error)
                )
            } catch (error) {
                console.log('error: '+ error);
            }
        },[])

    return (
        <>
            <Layout className='Home'>
                <p className='message bg-rose-500'>Bienvenido!</p>
                <section className="grid grid-cols-3 place-items-center gap-4 w-full max-w-screen-xl">
                    {
                        items?.map(
                            (item) => ( //forma de realizar un return directo
                                //React obliga a generar un identificador "key"
                                <Card key={item.id} data={item}/>
                            )
                        )
                    }
                </section>
                <ProductDetail/>
            </Layout>    
        </>
    );
}

export {Store}