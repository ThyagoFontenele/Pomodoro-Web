import { createContext, useState } from 'react';


export const GlobalContext = createContext();

export function GlobalProvider({children}){

    const [type, setType] = useState(1);
    
    return(
        <GlobalContext.Provider value={{type, setType}}>
            {children}
        </GlobalContext.Provider>
    )
}