import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Even from './Even';

function App() {
  const [counter, setCounter] = useState(0);
  const [username, setUsername] = useState('hula');

  useEffect(function(){
    console.log('just the once');
    
  },[])

  useEffect(function(){
    if(counter === 10){
      setUsername('adis');
    }
  },[counter])

  const part = (
    <div>holiwi</div>
  );


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <span onClick={() => setCounter(counter + 1)}>{counter}</span>
        <span>{username}</span>
        {counter % 2 === 0 ? (
          <Even counter={counter} setter={setCounter}/>
        ) : null}
        {part}
      </header>
    </div>
  );
}

export default App;
