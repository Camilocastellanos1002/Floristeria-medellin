import {createContext, useState} from "react";

const ShoppingCartContext = createContext();


function ShoppingCartProvider({children}){
    
    //estado del contador de productos en el carrito
    const [count, setCount] = useState(0); 

    
    //estado que controla el modal de detalle de producto (open/close) y valor por defecto de cerrado
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false); 
    
    //estado para almacenar los productos seleccionados, por defecto es un array vacío
    const [cardProducts, setCardProducts] = useState([]);
    
    //estado que controla el modal de detalle del carrito (open/close) y valor por defecto de cerrado
    const [isShoppingMenuOpen, setIsShoppingMenuOpen] = useState(false); 

    //estado para almacenar la informacion de la card seleccionada
    const [ productToShow, setProductToShow] = useState({}); //estado por defecto es un objeto vacío

    //estado para almacenar la orden de compra
    const [order, setOrder] = useState([]);


    function openProductDetail(){   //función para abrir el modal de detalle de producto
        setIsProductDetailOpen(true);
    }
    function closeProductDetail(){  //función para cerrar el modal de detalle de producto
        setIsProductDetailOpen(false)
    }
    function openShoppingMenu(){   //función para abrir el modal del shopping cart
        setIsShoppingMenuOpen(true);
    }
    function closeShoppingMenu(){  //función para cerrar el modal de shopping cart
        setIsShoppingMenuOpen(false)
    }

    return(
        <ShoppingCartContext.Provider 
            value={
                //se envían los estados y funciones a los componentes hijos
                {count, setCount, 
                openProductDetail, closeProductDetail, isProductDetailOpen,
                productToShow,setProductToShow,
                cardProducts,setCardProducts,
                isShoppingMenuOpen,openShoppingMenu,closeShoppingMenu,
                order,setOrder} 
            }>
            {children}   
        </ShoppingCartContext.Provider>
    );
}

export {ShoppingCartContext,ShoppingCartProvider}