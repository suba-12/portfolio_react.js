
  import '../assets/css/Contact.css'
  import React from 'react'

function Contact() {
    const onChange =(e)=>{
      console.log(e.value);
    }

  return (
<div className="container" sx={{display:{xs:"none",sm:"block"}}}> 

      
      <h1> Contact Me </h1>
      <div className="text"> 

      <div className=" contact"> 
       <label>Name : </label>
       <input id='input' type="text" onChangeC={onChange}/>
       </div>


<div className="email">
  <label> Email :  </label>
  <input id='input'type="text" onChangeC={onChange}/>
</div>


<div className="Project">
  <label> Project :</label>
  <input id='input'type="text" onChangeC={onChange}/>
  
</div>


<div className="message">
  <label> Message : </label>
  <textarea name='message' cols="70" rows="10"></textarea>
  
</div>
<button  type = "Submeit "className='--btn--primary'> Send Message</button>
</div>
      </div>
      
  )
}

export default Contact

  