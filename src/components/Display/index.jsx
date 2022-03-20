import { Container } from "./style";
import { useState, useEffect, useRef, useContext } from 'react';

import { GlobalContext } from "../../Context/GlobalContext";

export function Display(){

  const {type,setType} = useContext(GlobalContext);

  const workTime = 60 * 25;
  const breakTime = 60 * 5;
  const longBreakTime = 60 * 15;

  const [totalSeconds, setTotalSeconds] = useState(workTime);
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0);
  const [toggleStart, setToggleStart] = useState(false);
  const [countPomodoro, setCountPomodoro] = useState(1);
  const timeout = useRef();
  
  useEffect(() => {

    clearTimeout(timeout.current);

    if(toggleStart){
      timeout.current = setTimeout(()=>{
        if(totalSeconds > 0){
          setTotalSeconds(state => state - 1);
        }
        else{
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
    setMinutes(Math.floor(totalSeconds / 60));
    setSeconds(totalSeconds % 60);
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
            <ul>
                <li onClick={() => {setType(1); setCountPomodoro(1);}}>Pomodoro</li>
                <li onClick={() => {setType(2); setCountPomodoro(1);}}>Short Break</li>
                <li onClick={() => {setType(3); setCountPomodoro(1);}}>Long Break</li>
            </ul>
            <span>{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}</span>
            <button onClick={() => setToggleStart(state => !state)}>{toggleStart ? 'STOP' : 'START'}</button>
        </Container>
    )
}