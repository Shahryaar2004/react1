import React, { useState } from 'react'

export default function About() {
    const [btntext, setBtnText] = useState("enablr dark mode");

    const [myStyle, setMyStyle] = useState(  {
        backgroundColor :'black',
        color:'white',
        border : '2px solid black'
        
    });
    const toggleStyle = () => {
        if (myStyle.color === 'white') {
            setMyStyle({
                backgroundColor: 'white',
                color: 'black'
            });
            setBtnText("Enable dark mode");
        } else {
            setMyStyle({
                backgroundColor: 'black',
                color: 'white'
            });
            setBtnText("Enable bright mode");
        }
    };
    

   
  return (
    
    <>
   

    
    <div  className='container-fluid my-3 ' style={myStyle} >
      <div class="accordion" id="accordionExample">
  <div class="accordion-item" style={myStyle}>
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item " style={myStyle}>
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item" style={myStyle}>
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse"  style={myStyle}aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    
<div className="container my-3">
<button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
</div>
</div>
</>
  )
}
