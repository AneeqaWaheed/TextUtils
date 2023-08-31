import React, {useState} from 'react'

export default function TextArea(props) {
    const handleUpClick=()=>{
        // console.log("Converted to Uppercase "+text );
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{ 
        // console.log("Converted to Uppercase "+text );
        let newText= text.toLowerCase();
        setText(newText);
    }
    const handleClearClick=()=>{
        // console.log("Converted to Uppercase "+text );
        setText("");

    }
    const handleOnChange= (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text,setText]=useState('Enter Text here');
    return (
        <>
            <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} ></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick} >Convert to LowerCase</button>
            <button className="btn btn-primary mx-3" onClick={handleClearClick} >Clear Text</button>
            </div>
            <div className="container my-3">
                <h1>Your text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} letters</p>
                <p>{0.005*text.split(" ").length} Minutes read</p>
                <h1>Preview</h1>
                <p>{text}</p>
            </div>
            </>
    ) 
}