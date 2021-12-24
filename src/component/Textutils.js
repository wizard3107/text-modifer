
import React, {useState}from 'react'

function Textutils(props) {
    const [text, setText] = useState('enter text here')
   const handleUpClick= ()=>{
        console.log("button was clicked");
        const newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleOnChange= (e)=>
    {
        setText(e.target.value);
        
    }
    return ( 
    <div>
        <h1> { props.heading } </h1> 
        <div className = "mb-3" >
        <textarea className = "form-control" id="mybox" rows="8" value={text} onChange={handleOnChange}></textarea> 
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to upper Case</button>
    </div>
    )
}

export default Textutils