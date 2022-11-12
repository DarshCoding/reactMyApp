import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper case", "success");
    }
    
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower case", "success");
    }

    const handleCopyText = ()=>{
        let text = document.getElementById('my-text-area');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied susseccfully", "success");
    }

    const handleExtraSpaces = ()=>{
        let myText = text.split(/[ ]+/);
        setText(myText.join(" "));
        props.showAlert("Extra space has been removed", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>{props.heading}</h2>
                
                <div className="form-group mb-3">
                    <textarea className="form-control" id="my-text-area" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} value={text} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your Text summary</h2>
                <p>{text.split(" ").length} words and {text.length} charactors</p>
                <h3>Preview Text</h3>
                <p>{text}</p>
                <p>{0.008 * text.split(" ").length} Minutes to read this text</p>
            </div>
        </>
    )
}