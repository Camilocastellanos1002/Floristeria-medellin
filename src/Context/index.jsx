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

    //estado para obtener articulos por categoria
    const [searchByCategory, setSearchByCategory] = useState("");

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

    /*
        //funcion que filtrara los items por categoria
        function filteredItemsByCategory(items, searchByCategory){
            // console.log('items', items);      
            return items?.filter(
                (item)=>(
                    item.category.toLowerCase().includes(searchByCategory.toLowerCase()) 
                )
            )
        }
    */

    //funcion que filtrara los items por categoria
    function filteredItemsByCategory(items, searchByCategory) {
    
        // Convertir 'kebab-case' a formato normal
        const normalizedSearch = searchByCategory.replace(/-/g, " ").trim().toLowerCase();
    
        return items.filter((item) => {
            if (!item.category) return false; // Excluir si no tiene categoría
    
            // Verificar si la categoría es un array o un string
            if (Array.isArray(item.category)) {
                return item.category.some(cat =>
                    cat.trim().toLowerCase() === normalizedSearch
                );
            } else {
                return item.category.trim().toLowerCase() === normalizedSearch;
            }
        });
    }
    

    const filterBy =
        (searchType, items, searchByTitle, searchByCategory)=>{
        if (searchType === 'BY_TITLE') {
            // console.log('title');
            return filteredItemsByTitle(items,searchByTitle)
        }
        if (searchType === 'BY_CATEGORY') {
            // console.log('category');
            return filteredItemsByCategory(items,searchByCategory)
        }
        if (searchType === 'BY_TITLE_AND_BY_CATEGORY') {
            // console.log('title and category');
            return filteredItemsByCategory(items,searchByCategory).filter( 
                (item)=> item.title.toLowerCase().includes(searchByTitle.toLowerCase())
            )
        }
        if (!searchType) {
            // console.log('ninguno');
            return items
        }
    }

    useEffect(
        ()=>{
           
            if (searchByTitle && !searchByCategory ) {       //por titulo y no categoria
                setFilteredItems(filterBy('BY_TITLE',items,searchByTitle,searchByCategory))
            }else if (searchByCategory && !searchByTitle) {     //por categoria y no por titulo
                setFilteredItems(filterBy('BY_CATEGORY',items,searchByTitle,searchByCategory))
            }else if (searchByCategory && searchByTitle) {      //por titulo y categoria
                // console.log('xx: ',searchByCategory);
                // console.log('xxy: ',searchByTitle);
                setFilteredItems(filterBy('BY_TITLE_AND_BY_CATEGORY',items,searchByTitle,searchByCategory))
            }else if (!searchByCategory && !searchByTitle) {      //por ninguna de las dos
                setFilteredItems(filterBy(null,items,searchByTitle,searchByCategory))
            }
        },[items,searchByTitle,searchByCategory]
    )

    // console.log('searchByCategory: ',searchByCategory);
    // console.log('searchByTitle: ',searchByTitle);
    // console.log('filtereditems: ',filteredItems);


    

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
                filteredItems,
                searchByCategory,setSearchByCategory} 
            }>
            {children}   
        </ShoppingCartContext.Provider>
    );
}

export {ShoppingCartContext,ShoppingCartProvider}