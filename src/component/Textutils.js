import React, {useState}from 'react'
function Textutils(props) {
	const [text, setText] = useState('')
   const handleUpClick= ()=>{
		// console.log("button was clicked");
		const newtext = text.toUpperCase();
		setText(newtext);
	}
	const handleDnClick= ()=>{
		// console.log("button was clicked");
		const newtext = text.toLowerCase();
		setText(newtext);
	}
	const handleRtClick= ()=>{
		// console.log("button was clicked");
		setText("");
	}
	const handleReClick= ()=>{
		// console.log("button was clicked");
		const newtext = text;
		const arr= newtext.split(/[ ]+/);
		const newtxt=arr.join(" ");
		setText(newtxt);
	}

	const handleOnChange= (e)=>
	{
		setText(e.target.value);	
	}
	const handleCopy=(e)=>
	{
		var text= document.getElementById("mybox");
		text.select();
		navigator.clipboard.writeText(text.value);
	}
	return ( 
		<>
	<div className='container my-3'>
		<h1> { props.heading } </h1> 
		<div className = "mb-3" >
		<textarea className = "form-control" id="mybox" rows="8" value={text} onChange={handleOnChange}></textarea> 
		</div>
		<button className='btn btn-primary mx-2 my-3' onClick={handleUpClick}>Convert to upper Case</button>
		<button className='btn btn-primary mx-2 my-3' onClick={handleDnClick}>Convert to Lower Case</button>
		<button className='btn btn-primary mx-2 my-3' onClick={handleRtClick}>Remove text</button>
		<button className='btn btn-primary mx-2 my-3' onClick={handleReClick}>Remove Extra Space</button>
		<button className='btn btn-primary mx-2 my-3' onClick={handleCopy}>Copy Text</button>
	</div>
	<div className='container my-4'>
		<h1>Your Text Summary 
		</h1>
		<p>Your text contains {text.split(" ").length} words and {text.length} characters</p>
		<p>time to read this text is {0.008*text.split(" ").length}</p>
		<h2>Preview</h2>
		<p>{text}</p>
	</div>
	</>
	)
}
export default Textutils;