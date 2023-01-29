import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { useState } from 'react';

var a=10
function App() {
  // const [num , setnum] = useState()
  return (
    <div className="App">
      <Home id={a}/>
    </div>
  );
}

export default App;
