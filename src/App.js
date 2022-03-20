import { useState, useEffect, useRef } from 'react';

function App() {
  const [totalSeconds, setTotalSeconds] = useState(60 * 25);

  const [minutes, setMinutes] = useState(Math.floor(totalSeconds / 60))
  const [seconds, setSeconds] = useState(totalSeconds % 60);
  const [toggleStart, setToggleStart] = useState(false);

  const timeout = useRef();
  
  useEffect(() => {
    clearTimeout(timeout.current);
    if(toggleStart){
      timeout.current = setTimeout(()=>{
        setTotalSeconds(state => state - 1);
        setMinutes(Math.floor(totalSeconds / 60));
        setSeconds(totalSeconds % 60);
      }, 1000)
    }
  }, [totalSeconds, toggleStart])

  return (
    <div className="App">
      <span>{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}</span>
      <button onClick={() => setToggleStart(state => !state)}>{toggleStart ? 'Stop' : 'Start'}</button>
    </div>
  );
}

export default App;
