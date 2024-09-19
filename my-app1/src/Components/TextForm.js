import React , {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("enter text here");
  const handleUpClick = ()=>{
    console.log("upper case was clicked" + text)
   
    
    let newText = text.toUpperCase();
    setText(newText)
    
    
  }
  const handleOnChange = (event)=>{
    console.log("upper case was clicked")
    setText(event.target.value)
    
  }

  const handleLowClick = ()=>{
    console.log("lower case was clicked" + text)
    
    let newText = text.toLocaleLowerCase();
    setText(newText)
    
  }
  const handleClearClick = ()=>{
    console.log("Clear case was clicked" + text)
    
    let newText = '';
    setText(newText)
    
  }
  const handleInverseClick = () => {
    console.log("Clear case was clicked:", text);

    const invertedText = text
        .split('') 
        .map(char => {
           
            return char === char.toUpperCase()
                ? char.toLowerCase()
                : char.toUpperCase();
        })
        .join(''); 

    setText(invertedText); 
};

  
  
  // setText('enter text 2')

  return (
    <>
    <div className="container" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
<div class="mb-3">
<h1>{props.heading}</h1>
 
  <textarea className="form-control"  value={text}   onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'light'}} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<div className="d-flex justify-content-around">
<button class="my-3" className="btn btn-primary" onClick={handleUpClick}>Covert to UpperCase</button>
<button class="my-3" className="btn btn-primary" onClick={handleLowClick}>Covert to LowerCase</button>
<button class="my-3" className="btn btn-primary" onClick={handleClearClick}>Clear text</button>
<button class="my-3" className="btn btn-primary" onClick={handleInverseClick}>inverse vlick</button>




</div>
</div>
<div className="container my-3">
  <h1>Your text Summary</h1>
  <p> words {text.split(" ").length} characters {text.length}</p>
  <p> {0.008* text.split(" ").length} Minutes read</p>
  <h2 className="my-3">Preview</h2>
  <p>{text}</p>
</div>
</>
  )
}
