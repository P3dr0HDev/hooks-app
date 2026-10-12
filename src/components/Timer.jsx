import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Timer() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSegundos((segundos) => segundos + 1);
  }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Timer: {segundos} segundos.</div>;
} 


export default Timer
