import { Container } from "./style"
import logo from '../../assets/logo.png'
import {useContext} from 'react';
import { ModalContext } from "../../Context/ModalContext";

export function Header(){
    const {setSettingModalOpen} = useContext(ModalContext)
    return(
        <Container>
            <div>
                <p><img src={logo} alt='logo' />PomoAdoro</p>
                
                <ul>
                    <li onClick={() => setSettingModalOpen(true)}>
                        <img src="https://pomofocus.io/icons/config-white.png" alt="setting" />
                        Setting
                    </li>
                </ul>
            </div>
        </Container>
    )
}