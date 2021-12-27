import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Textutils from './component/Textutils';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className='container'>
      <Textutils heading="Enter The text to analyze"/>
      <About/>
      </div>
    </div>
  );
}

export default App;
