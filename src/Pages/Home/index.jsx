import { useContext, useState, useEffect} from "react";
import { ShoppingCartContext } from "../../Context";
import {Layout} from '../../Components/Layout'
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid"

function Home(){

    const context = useContext(ShoppingCartContext);

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
    ]
    
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === carouselPublicity.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? carouselPublicity.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 10000); // 10 segundos

        return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    }, [current]); // Se ejecuta cada vez que cambia el slide actual


    return(
        <>  
        context
            <Layout>
                <section  className="flex justify-center items- bg-rose-500 m-3 rounded-xl">
                    <section className="relative w-full h-full max-w-lg mx-auto m-3 ml-10">
                        <section className="overflow-hidden">
                            <img src={carouselPublicity[current].image} alt="Carousel" className="w-full h-full object-cover transition-all duration-500 p-3 rounded-3xl" />
                        </section>
                        <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-opacity-100 text-white p-3 rounded-lg">
                            <ChevronLeftIcon className='h-10 w-10 cursor-pointer text-white '/>
                        </button>
                        <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white p-3 rounded-lg">
                            <ChevronRightIcon className='h-10 w-10 cursor-pointer text-white'/>
                        </button>
                    </section>    
                    <section className="grid grid-rows-2 m-30">
                        <h1 className="font-bold text-2xl">{carouselPublicity[current].title}</h1>
                        <p className="text-white">{carouselPublicity[current].description}</p>
                    </section>
                </section>
            </Layout>
            <section className="bg-teal-400 m-3">
                <h1 className='flex justify-center'>Regala Momentos Inolvidables</h1>
                <section>
                    <h2>Tenemos regalos y decoraciones para cualquier ocasión que desees</h2>
                    <section>
                        <img src="" alt="" />
                        <h3></h3>
                    </section>
                </section>
            </section>
        </>
    )

}

export {Home};

