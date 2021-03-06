import { Container } from "./style";
import { useState, useEffect, useRef, useContext } from 'react';
import { GlobalContext } from "../../Context/GlobalContext";
import alarme from '../../assets/alarme.mp3'
import botaosom from '../../assets/botaosom.mp3'
export function Display(){

  const {type,setType, pomodoroMinutes, breakMinutes, longBreakMinutes} = useContext(GlobalContext);

  const workTime = 60 * pomodoroMinutes;
  const breakTime = 60 * breakMinutes;
  const longBreakTime = 60 * longBreakMinutes;

  const [totalSeconds, setTotalSeconds] = useState(workTime);
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0);
  const [toggleStart, setToggleStart] = useState(false);
  const [countPomodoro, setCountPomodoro] = useState(1);
  const timeout = useRef();
  const audioAlarme = useRef();
  const audioBotao = useRef();
  useEffect(() => {

    clearTimeout(timeout.current);

    if(toggleStart){
      timeout.current = setTimeout(()=>{
        if(totalSeconds > 0){
          setTotalSeconds(state => state - 1);
        }
        else{
          audioAlarme.current.play();
          setToggleStart(false);
          if(type === 1 && countPomodoro < 4){
            setCountPomodoro(state => state + 1);
            setType(2); 
          }
          else if(type === 1 && countPomodoro === 4){
            setCountPomodoro(1);
            setType(3);
          }
          else{
            setType(1);
          }
        }
      }, 1000)
    }
  }, [totalSeconds, toggleStart, countPomodoro, type, setType])

  useEffect(() => {
    setMinutes(Math.floor(totalSeconds / 60).toFixed(0));
    setSeconds((totalSeconds % 60).toFixed(0));
  }, [totalSeconds])
    
  useEffect(() => {
    switch(type){
      case 1:
        setToggleStart(false);
        setTotalSeconds(workTime);
        setType(1); 
      break;
      case 2:
        setToggleStart(false);
        setTotalSeconds(breakTime); 
        setType(2); 
      break;
      default:
        setToggleStart(false);
        setTotalSeconds(longBreakTime); 
        setType(3); 
      break;
    }
  }, [type, breakTime, longBreakTime, setType, workTime])

    return(
        <Container isActive={toggleStart} type={type}>
          <audio ref={audioAlarme} src={alarme}></audio>
          <audio ref={audioBotao} src={botaosom}></audio>
          <ul>
              <li onClick={() => {setType(1); setCountPomodoro(1);}}>Pomodoro</li>
              <li onClick={() => {setType(2); setCountPomodoro(1);}}>Short Break</li>
              <li onClick={() => {setType(3); setCountPomodoro(1);}}>Long Break</li>
          </ul>
          <span>{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}</span>
          <button onClick={() => {setToggleStart(state => !state); audioBotao.current.play();}}>{toggleStart ? 'STOP' : 'START'}</button>
        </Container>
    )
}