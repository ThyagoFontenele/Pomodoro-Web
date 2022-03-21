import Modal from "react-modal";
import {useContext} from 'react';
import { ModalContext } from "../../Context/ModalContext";
import { Container } from "./styled";

export function ModalSettings(){
    const {settingModalOpen, setSettingModalOpen} = useContext(ModalContext)
    return(
        <Modal
        isOpen={settingModalOpen}
        onRequestClose={() => {setSettingModalOpen(false)}}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <Container>
                <h1>TIMER SETTING</h1>
                <div>
                    <h2>Time (minutes)</h2>
                    <ul>
                        <li>
                            <label>Pomodoro</label>
                            <input type="number" />
                        </li>
                        <li>
                            <label>Short Break</label>
                            <input type="number" />
                        </li>
                        <li>
                            <label>Pomodoro</label>
                            <input type="number" />
                        </li>
                    </ul>
                </div>
                
            </Container>
        </Modal>
    )
}