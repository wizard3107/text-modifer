//import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Textutils from './component/Textutils';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className='container my-3'>
      <Textutils heading="Enter The text to analyze"/>

      </div>
    </div>
  );
}

export default App;
