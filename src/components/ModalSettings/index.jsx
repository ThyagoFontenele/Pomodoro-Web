import Modal from "react-modal";
import {useContext, useState, useRef} from 'react';
import { ModalContext } from "../../Context/ModalContext";
import { Container } from "./styled";
import { GlobalContext } from "../../Context/GlobalContext";
export function ModalSettings(){
    const {settingModalOpen, setSettingModalOpen, userUrls, setUserUrls} = useContext(ModalContext)

    const {pomodoroMinutes, setPomodoroMinutes} = useContext(GlobalContext);
    const {breakMinutes, setBreakMinutes} = useContext(GlobalContext);
    const {longBreakMinutes, setLongBreakMinutes} = useContext(GlobalContext);
    const [alertStatus, setAlertStatus] = useState('');

    function setMinutes(value, callback){
        if(value > 60){
            setAlertStatus('ERRO: O valor não pode ser maior que 60.');
        }
        else if(value < 0){
            setAlertStatus('ERRO: O valor não pode ser menor que 0.');
        }
        else{
            callback(value);
            setAlertStatus('');
        }
    }

    const input = useRef();

    function addMusic(e){
        e.preventDefault();
        
        if(input.current.value.includes('youtu')){
            setUserUrls([...userUrls, input.current.value]);
            input.current.value = '';
            setAlertStatus('');
        }else{
            setAlertStatus('ERRO: Adicione links do youtube.');
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
                <h1>SETTINGS</h1>
                
                <div>
                    <h2>Time setting (minutes)</h2>
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
                    <h2>Playlist setting (urls)</h2>
                    <div>
                        <input type="text" ref={input} placeholder="Adicione as urls." />
                        <button onClick={(e) => addMusic(e)}>Adicionar música</button>
                        <button onClick={() => setUserUrls([])}>Remover músicas</button>
                        <span>{userUrls.length} música{userUrls.length === 1 ? '' : 's'} na playlist.</span>
                    </div>
                </div>
                <span>{alertStatus}</span>
            </Container>
        </Modal>
    )
}