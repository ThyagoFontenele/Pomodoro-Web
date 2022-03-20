import { createContext, useState } from 'react';


export const GlobalContext = createContext();

export function Provider({children}){

    const [type, setType] = useState(1);
    
    return(
        <GlobalContext.Provider value={{type, setType}}>
            {children}
        </GlobalContext.Provider>
    )
}