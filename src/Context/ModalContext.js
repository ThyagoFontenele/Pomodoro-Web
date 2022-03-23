import { createContext, useState } from 'react';

export const ModalContext = createContext();

export function ModalProvider({children}) {
    
    const [settingModalOpen, setSettingModalOpen] = useState(false);
    const [userUrls, setUserUrls] = useState([]);

    return(
        <ModalContext.Provider value={{settingModalOpen, setSettingModalOpen, userUrls, setUserUrls}}>
            {children}
        </ModalContext.Provider>
    )
}