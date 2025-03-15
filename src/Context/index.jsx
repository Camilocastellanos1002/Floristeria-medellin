import {createContext, useState, useEffect } from "react";
import { ApiURL } from "../Components/Api";

const ShoppingCartContext = createContext();


function ShoppingCartProvider({children}){

    //estado que genera cada item que se renderizara en store para cada una de las cards
    const [items, setItems] = useState(null);

    //estado que generara el filtrado de los items que trae el fetch para renderizar en store 
    const [filteredItems, setFilteredItems] = useState(null);
    
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

    //estado para obtener articulo por busqueda
    const [searchByTitle, setSearchByTitle] = useState("");
    // console.log('searchByTitle', searchByTitle);
     


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
        },[]
    )

    //funcion que filtrara los items por el titulo ingresado en el input
    function filteredItemsByTitle(items, searchByTitle){
        return items?.filter(
            (item)=>(
                item.title.toLowerCase().includes(searchByTitle.toLowerCase()) 
            )
        )
    }

    useEffect(
        ()=>{
            if (searchByTitle) {
                setFilteredItems(filteredItemsByTitle(items,searchByTitle))
            }else {
                setFilteredItems(items);
            }
        },[items,searchByTitle]
    )
    // console.log('filtereditems',filtereditems);
    

    return(
        <ShoppingCartContext.Provider 
            value={
                //se envían los estados y funciones a los componentes hijos
                {items,setItems,
                count, setCount, 
                openProductDetail, closeProductDetail, isProductDetailOpen,
                productToShow,setProductToShow,
                cardProducts,setCardProducts,
                isShoppingMenuOpen,openShoppingMenu,closeShoppingMenu,
                order,setOrder,
                searchByTitle,setSearchByTitle,
                filteredItems} 
            }>
            {children}   
        </ShoppingCartContext.Provider>
    );
}

export {ShoppingCartContext,ShoppingCartProvider}