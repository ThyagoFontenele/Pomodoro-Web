import { createContext, useState, useEffect } from 'react';

export const ModalContext = createContext();

export function ModalProvider({children}) {

    const [settingModalOpen, setSettingModalOpen] = useState(false);
    const [userUrls, setUserUrls] = useState(JSON.parse(localStorage.getItem("musicList")) || []);

    useEffect(() => {
        localStorage.setItem("musicList", JSON.stringify(userUrls));
    }, [userUrls]);

    return(
        <ModalContext.Provider value={{settingModalOpen, setSettingModalOpen, userUrls, setUserUrls}}>
            {children}
        </ModalContext.Provider>
    )
}