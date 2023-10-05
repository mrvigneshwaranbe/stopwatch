import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [running]);

  const handleStartStop = () => {
    setRunning(!running);
  };

  const handleReset = () => {
    setTime(0);
    setRunning(false);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
  };

  return (
    <div style={{ backgroundColor: 'pink', minHeight: '100vh', padding: '20px', boxSizing: 'border-box' }}>
      <div style={{ backgroundColor: 'red', width: '35%', marginLeft: '34%', marginTop: '15%', borderRadius: '5%' }}>
        <div style={styles.stopwatchContainer}>
          <span style={{ fontSize: '180%', fontWeight: '800', color: 'darkblue' }}>STOP WATCH</span>
          <div style={styles.stopwatchDisplay}>{formatTime(time)}</div>
          <button style={styles.button} onClick={handleStartStop}>
            {running ? 'Stop' : 'Start'}
          </button>
          <button style={styles.button} onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  stopwatchContainer: {
    textAlign: 'center',
    maxWidth: '300px',
    margin: 'auto',
    marginTop: '15%',
  },
  stopwatchDisplay: {
    fontSize: '4em',
    margin: '20px',
  },
  button: {
    fontSize: '1.2em',
    margin: '5px',
    padding: '4%',
    cursor: 'pointer',
    width: '35%',
  },
};

export default Stopwatch;