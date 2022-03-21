import { createContext, useState } from 'react';

export const ModalContext = createContext();

export function ModalProvider({children}) {
    const [settingModalOpen, setSettingModalOpen] = useState(false);
    return(
        <ModalContext.Provider value={{settingModalOpen, setSettingModalOpen}}>
            {children}
        </ModalContext.Provider>
    )
}