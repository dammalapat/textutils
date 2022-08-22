import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick =()=>
    {
             let newText=text.toUpperCase();
               setText(newText);
               props.showAlert("converted to upper case","success ")
    }
    const handleclearClick =()=>
    {
             let newtext='';
             setText(newtext);

    }
    const handledownclick =()=>
    {
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("converted to lower case","success ")
    }
    const handleOnChange =(event)=>
    {
        setText(event.target.value);
    }
    const handleCopy =()=>
    {
        var text=document.getElementById('myBox')
       text.select();
       navigator.clipboard.writeText(text.value)
    }
    
    const [text,setText]=useState('')
  return (
    <>
    <div>
    <div className={`mb-3 text-${props.mode ==='light'?'grey':'light'}`}>
        <h1>{props.heading}</h1>
    <label htmlFor="myBox" className={`form-label text-${props.mode ==='light'?'grey':'light'}`} >Example textarea</label>
    <textarea className="form-control" id="myBox" rows="6" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='light'?'white':'grey'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handledownclick}>convert to lowerase</button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>copy text</button>
    </div>
    <div className={`container text-${props.mode ==='light'?'grey':'light'}`}>
        <h1>your text summary</h1>
        <p>no of words is {text.split(" ").length} and no of letters is {text.length}</p>
        <p>time to read is {0.008*text.split(" ").length}</p>
        <h3>preview</h3>
        <p>{text.length>0?text:"enter something to preview here"}</p>
    </div>
    </>
  )
}
