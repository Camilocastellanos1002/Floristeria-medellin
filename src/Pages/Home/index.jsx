import { useContext, useState, useEffect} from "react";
import { ShoppingCartContext } from "../../Context";
import {Layout} from '../../Components/Layout'
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid"
import { NavLink } from "react-router-dom";
import { Footer } from "../../Components/Footer";
import { GoogleMapApi } from "../../Components/GoogleMapApi";

function Home(){

    //leey usar el contexto global
    const context = useContext(ShoppingCartContext);

    //estado para obtener productos aleatorios para mostrar
    const [randomProducts, setRandomProducts] = useState([]);
    
    //contador del carousel
    const [current, setCurrent] = useState(0);

    // Estado para las imágenes del carrusel
    const [publicityImages, setPublicityImages] = useState([]); 


    //funciones para controlar botones del carousel
    const nextSlide = () => {
        setCurrent((prev) => (prev === randomProducts.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? randomProducts.length - 1 : prev - 1));
    };

    // Función para obtener 3 productos aleatorios
    const getRandomProducts = (products) => {
        if (!products || products.length === 0) return []; // Si no hay productos, devuelve un array vacío.

        // Mezcla aleatoriamente el array de productos usando sort() con una función aleatoria.
        const shuffled = [...products].sort(() => 0.5 - Math.random());

        // Retorna los primeros 3 elementos del array mezclado.
        return shuffled.slice(0, 5); // Toma los primeros 3
    };

    // Función para obtener datos de publicityImages desde db.json
    const fetchPublicityImages = async () => {
        try {
            const response = await fetch("http://localhost:3001/publicityImages"); // Cambia la URL según tu configuración
            const data = await response.json();
            setPublicityImages(data);
        } catch (error) {
            console.error("Error al obtener las imágenes de publicidad:", error);
        }
    };

    useEffect(() => {
        fetchPublicityImages(); // Llama a la función para obtener las imágenes
    }, []);

    useEffect(() => {
        // Verifica si hay productos disponibles en el contexto.
        if (context.items && context.items.length > 0) {
            setRandomProducts(getRandomProducts(context.items)); // Selecciona 3 productos aleatorios.
            setCurrent(0); // Reinicia el índice del slide a 0 para empezar desde el primer producto.
        }
        else {
            setRandomProducts([]); // Inicializar con un array vacío si no hay productos.
        }
    
    }, [context.items]); // Se ejecuta cuando los productos del contexto cambian


    useEffect(() => {
        // Configura un intervalo para cambiar automáticamente de slide cada 10 segundos.
        const interval = setInterval(
            () => {
                nextSlide();
        }, 10000); // 10 segundos

        // Limpia el intervalo cuando el componente se desmonta o cuando current cambia.
        return () => clearInterval(interval);   
    }, [current]); // Se ejecuta cada vez que cambia el slide actual


    return (
        <>  
            <h1 className='flex justify-center items-center text-7xl text-rose-500 font-extrabold p-3 mt-25'>Floristeria Medellin</h1>
            <h2 className='flex justify-center items-center text-3xl text-rose-500 font-bold p-3'>Regala Momentos Inolvidables</h2>
            <Layout>
                <section className="p-2 m-2">
                        <section className="grid grid-row-2">
                            <h2 className=" flex items-center justify-center text-xl text-white">Tenemos regalos y decoraciones para cualquier ocasión que desees</h2>
                            <section className="grid grid-cols-5 m-5 p-5 justify-around font-bold gap-5">
                                {publicityImages.map((image, index) => (
                                    <section key={index}>
                                        <img src={image.image} alt={image.title} className="w-350 h-120 object-cover rounded-lg shadow-2xl" />
                                        {/*  skew-y-2  */}
                                        <h3 className="text-center mt-3">{image.category}</h3>
                                    </section>
                                ))}
                            </section>
                        </section>
                    </section>
            </Layout>
            <h1 className='flex justify-center items-center text-3xl text-rose-500 font-extrabold mt-3'>Mira algunos de nuestros productos</h1>
            <Layout>
                <section className="grid grid-row-2 justify-center items-center bg-rose-500 m-3 rounded-xl mt-5">
                    <section className="flex">
                        <section className="relative w-full h-full max-w-lg mx-auto m-3 ml-10">
                            <section className="overflow-hidden">
                                <img 
                                    src={randomProducts[current]?.image} 
                                    alt={randomProducts[current]?.title} 
                                    className="w-full h-100 object-cover transition-all duration-500 p-3 rounded-3xl" 
                                />
                            </section>
                            <button 
                                onClick={prevSlide} 
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-opacity-100 text-white p-3 rounded-lg"
                            >
                                <ChevronLeftIcon className='h-10 w-10 cursor-pointer text-white '/>
                            </button>
                            <button 
                                onClick={nextSlide} 
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white p-3 rounded-lg"
                            >
                                <ChevronRightIcon className='h-10 w-10 cursor-pointer text-white'/>
                            </button>
                        </section>    
                        <section className="grid grid-rows-2 m-30">
                            <h1 className="font-bold text-2xl">{randomProducts[current]?.title}</h1>
                            <p className="text-white">{randomProducts[current]?.description}</p>
                            <NavLink
                                to={'/store'}>
                                <button className="bg-white p-2 rounded-lg mt-5 text-rose-500 cursor-pointer">Ver nuestra tienda</button>
                            </NavLink>
                        </section>
                    </section>
                </section>
            </Layout>
            <h1 className='flex justify-center items-center text-3xl text-rose-500 font-extrabold mt-3'>Visitanos</h1>
            <Layout>
                <GoogleMapApi/>
            </Layout>
            <Footer/>
        </>
    )
}

export {Home};



/*
const carouselPublicity =[
    {
        "image":"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQdAp_0QZJgCMWNvFd-lzlIFAsfDdZktv9HB-aKQ7krJFVxISOsw6Uspf6OgIhCVe05XjXa2-Ljf2OeP4BJWaWCO02hX1CIAMVz4R3U_bnhStl73nEZWN1Tt_ZDDdpKANwsbmkHDtkFIYdD7JjBUbmWfoGzjeN4-zF3fJ53U2XqtFbjcZNlzrAn1XexRM/s320/mi-gran-corazon.jpeg",
        "title": 'Mi Gran corazón',
        "description": 'Expresa el amor más profundo la esencia del romance eterno. Un corazón vibrante de rosas rojas pasión, meticulosamente dispuestas para crear un símbolo inolvidable de tu afecto. Cada rosa, cuidadosamente seleccionada, irradia belleza y frescura, mientras que los delicados toques de Gypsophila y los exquisitos bombones dorados añaden un encanto especial.'
    },
    {
        "image":'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJvB59RywW4DEGQbvligSmZCPQZpjwf7RlgLC_FWpBX90Q9yhYSJbjWZRAq2m2wfcO0CvZHJtyhUXlm9_B1n9JMa1um24hw8bNHra0LxI3ESuZ1CU4ty2QIeaZ2b9mp6ksmqxch4nO01cuMMGPK4pXiK8SvBAASoxp_yIRjCac2WfEdRrQDh1Wh1QYqPY/s320/amor-cremoso.jpeg',
        "title": 'Amor Cremoso',
        "description": 'Un regalo que despierta los sentidos y enamora a primera vista. Este arreglo floral único combina la belleza de las rosas rojas con el sabor inconfundible del Baileys Original Irish Cream, creando una mezcla irresistible. Los bombones dorados, como pequeños tesoros, complementan este detalle especial, ideal para celebrar aniversarios, cumpleaños o simplemente para decir "te amo" de una manera original y deliciosa.'
    },
    {
        "image":'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBVmQ-3f_3ZEIkRtaFtIsYzTe4QIELOeqjoTPZsb_rT9N0wQkDNTTfz8S3Fw4XiqcMfmNFc9m0pb5bUJIzRSewlrKiBl8oBE8CPPYI_LDRRhdi81Absyi1rw9BXNfB1Gz1PBHIEH206tLluiRdWBT11Pc4wk2j-Dz4TxxOkmpIb1c22qsONoCEJPu4ba8/s320/teddy-rose.jpeg',
        "title": 'Teddy Rose',
        "description": 'Adorable osito de peluche hecho completamente de rosas rojas pasión. Cada pétalo ha sido cuidadosamente seleccionado y colocado para crear un regalo tan único como especial. Este osito de rosas es la combinación perfecta de ternura y elegancia, ideal para expresar amor, cariño y alegría en cualquier ocasión. Sorprende a esa persona especial con un detalle que perdurará en su corazón.'
    }
]*/