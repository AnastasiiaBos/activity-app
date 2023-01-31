import './App.css';
import { useEffect, useState } from 'react';
import { data } from './data';

function App() {
  const [activity, setActivity] = useState('');
  const [backgroundColorNumber, setBackgroundColorNumber] = useState(0);
  const myBackgroundColor = data[backgroundColorNumber];

  useEffect( () => {
    getAdvice();
  }, []);

  const getAdvice = async () => {
    const response = await fetch('http://www.boredapi.com/api/activity/');
    const data = await response.json();

    setActivity(data.activity);
  };

  const onClickChangeAdvice = () => {
    const randonNum = getRandomInt(0, data.length);
    setBackgroundColorNumber(randonNum);
    getAdvice();
  };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <div className="mainWrapper" style={{backgroundColor: myBackgroundColor}}>
      <h1>Bored and have nothing to do?</h1>
      <button className="btn" onClick={onClickChangeAdvice}>Click to get new tip</button>
      <p className="text">{activity}</p>
    </div>
  );
}

export default App;
