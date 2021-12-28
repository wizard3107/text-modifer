import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Textutils from './component/Textutils';

function App() {
  const [mode,setMode]=useState('light')
  const toggleMode=()=>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='rgb(12 21 49)';
    }
    else{
setMode('light');
document.body.style.backgroundColor='white'
    }
  }
  return (
    <div className="app">
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <div className='container'>
      <Textutils heading="Enter The text to analyze" mode={mode}/>
      <About mode={mode}/>
      </div>
    </div>
  );
}

export default App;
