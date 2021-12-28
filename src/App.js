import { useState } from 'react';
import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import Textutils from './component/Textutils';

function App() {
  const [mode,setMode]=useState('light');
const [alert, setAlert]=useState(null);
const showAlert=(msg,typ)=>{
  setAlert({
    msg:msg,
    type:typ
  })
  setTimeout( ()=>{
    setAlert(null)},
    1500
  )
}
  const toggleMode=()=>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='rgb(12 21 49)';
      showAlert('Dark mode enabled Successfully','success')
    }
    else{
setMode('light');
document.body.style.backgroundColor='white';
showAlert('Light mode enabled Successfully','success')
    }
  }
  return (
    <div className="app">
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <div className='container'>
      <Alert alert={alert}/>
      <Textutils showAlert={showAlert} heading="Enter The text to analyze" mode={mode}/>
      <About mode={mode}/>
      
      </div>
    </div>
  );
}

export default App;
