import { useState } from 'react';
import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import Textutils from './component/Textutils';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

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
    <Router>
      <div>
      <div className="app">
      <Navbar mode={mode} toggleMode={toggleMode}/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Alert alert={alert}/>      
      <div className='container'>
        <Routes>
          <Route path={'/About'} element={<About mode={mode}/>}>
          </Route>
          <Route path={'/'} element={<Textutils showAlert={showAlert} heading="Enter The text to analyze" mode={mode}/>}>
          </Route>
        </Routes>
      </div>
      </div>
      </div>
    </Router>
    
   
  );
}

export default App;
