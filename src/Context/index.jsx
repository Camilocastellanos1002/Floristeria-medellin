import {createContext, useState} from "react";

const ShoppingCartContext = createContext();


function ShoppingCartProvider({children}){
    
    const [count, setCount] = useState(0);
    // console.log('contador del carro: '+ count);
    
    return(
        <ShoppingCartContext.Provider 
            value={
                {count, setCount}
            }>
            {children}   
        </ShoppingCartContext.Provider>
    );
}

export {ShoppingCartContext,ShoppingCartProvider}