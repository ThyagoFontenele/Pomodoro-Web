import Modal from "react-modal";
import {useContext, useState} from 'react';
import { ModalContext } from "../../Context/ModalContext";
import { Container } from "./styled";
import { GlobalContext } from "../../Context/GlobalContext";
export function ModalSettings(){
    const {settingModalOpen, setSettingModalOpen} = useContext(ModalContext)

    const {pomodoroMinutes, setPomodoroMinutes} = useContext(GlobalContext);
    const {breakMinutes, setBreakMinutes} = useContext(GlobalContext);
    const {longBreakMinutes, setLongBreakMinutes} = useContext(GlobalContext);

    const [alertStatus, setAlertStatus] = useState('');
    function setMinutes(value, callback){
        if(value > 60){
            setAlertStatus('O valor não pode ser maior que 60.');
        }
        else if(value < 0){
            setAlertStatus('O valor não pode ser menor que 0.');
        }
        else{
            callback(value);
            setAlertStatus('');
        }
    }

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
                            <input type="number" name="pomodoro" value={pomodoroMinutes} onChange={(e) => setMinutes(e.target.value, setPomodoroMinutes)}/>
                        </li>
                        <li>
                            <label>Short Break</label>
                            <input type="number"name="shortBreak" value={breakMinutes} onChange={(e) => setMinutes(e.target.value, setBreakMinutes)}/>
                        </li>
                        <li>
                            <label>Long Break</label>
                            <input type="number" value={longBreakMinutes} onChange={(e) => setMinutes(e.target.value, setLongBreakMinutes)}/>
                        </li>
                    </ul>
                </div>
                <span>{alertStatus}</span>
            </Container>
        </Modal>
    )
}