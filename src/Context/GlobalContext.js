import { createContext, useState, useEffect } from 'react';


export const GlobalContext = createContext();

export function GlobalProvider({children}){

    const [type, setType] = useState(1);
    const [pomodoroMinutes, setPomodoroMinutes] = useState(localStorage.getItem("pomodoro") || 25);
    const [breakMinutes, setBreakMinutes] = useState(localStorage.getItem("break") || 5);
    const [longBreakMinutes, setLongBreakMinutes] = useState(localStorage.getItem("longBreak") || 15);

    useEffect(() => {
        localStorage.setItem("pomodoro", pomodoroMinutes);
        localStorage.setItem("break", breakMinutes);
        localStorage.setItem("longBreak", longBreakMinutes);
    },[pomodoroMinutes, breakMinutes, longBreakMinutes])
    return(
        <GlobalContext.Provider value={{
            type,
            setType,
            pomodoroMinutes,
            setPomodoroMinutes,
            breakMinutes,
            setBreakMinutes,
            longBreakMinutes,
            setLongBreakMinutes
        }}>
            {children}
        </GlobalContext.Provider>
    )
}