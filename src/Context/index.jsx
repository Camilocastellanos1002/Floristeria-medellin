import React from "react";

const TheContext = React.createContext();


function contextProvider({children}){
    const [openModal, setOpenModal] = React.useState(false);


    return(
        <TheContext.Provider
            value={{
                openModal,
                setOpenModal
            }}>
            {children}
        </TheContext.Provider>
    );
}

export {TheContext,contextProvider}