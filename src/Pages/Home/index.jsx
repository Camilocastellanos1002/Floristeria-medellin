import { useContext, useState, useEffect} from "react";
import { ShoppingCartContext } from "../../Context";
import {Layout} from '../../Components/Layout'
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid"

function Home(){
    const context = useContext(ShoppingCartContext);

    const images = [
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQdAp_0QZJgCMWNvFd-lzlIFAsfDdZktv9HB-aKQ7krJFVxISOsw6Uspf6OgIhCVe05XjXa2-Ljf2OeP4BJWaWCO02hX1CIAMVz4R3U_bnhStl73nEZWN1Tt_ZDDdpKANwsbmkHDtkFIYdD7JjBUbmWfoGzjeN4-zF3fJ53U2XqtFbjcZNlzrAn1XexRM/s320/mi-gran-corazon.jpeg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJvB59RywW4DEGQbvligSmZCPQZpjwf7RlgLC_FWpBX90Q9yhYSJbjWZRAq2m2wfcO0CvZHJtyhUXlm9_B1n9JMa1um24hw8bNHra0LxI3ESuZ1CU4ty2QIeaZ2b9mp6ksmqxch4nO01cuMMGPK4pXiK8SvBAASoxp_yIRjCac2WfEdRrQDh1Wh1QYqPY/s320/amor-cremoso.jpeg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBVmQ-3f_3ZEIkRtaFtIsYzTe4QIELOeqjoTPZsb_rT9N0wQkDNTTfz8S3Fw4XiqcMfmNFc9m0pb5bUJIzRSewlrKiBl8oBE8CPPYI_LDRRhdi81Absyi1rw9BXNfB1Gz1PBHIEH206tLluiRdWBT11Pc4wk2j-Dz4TxxOkmpIb1c22qsONoCEJPu4ba8/s320/teddy-rose.jpeg"
    ];
    
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
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
            <div className="relative w-120 h-130 max-w-lg mx-auto p-1">
                <div className="overflow-hidden border rounded-lg">
                    <img src={images[current]} alt="Carousel" className="w-full h-full object-cover transition-all duration-500 p-3" />
                </div>
                <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-opacity-100 text-white p-3 rounded-lg">
                    <ChevronLeftIcon className='h-10 w-10 cursor-pointer text-white '/>
                </button>
                <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white p-3 rounded-lg">
                    <ChevronRightIcon className='h-10 w-10 cursor-pointer text-white'/>
                </button>
            </div>            
        </Layout>
        </>
    )

}

export {Home};

