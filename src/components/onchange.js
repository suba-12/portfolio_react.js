import React from 'react'
function Onc() {
    const onChange =(e)=>{
        console.log(e.value);
    }
  return (
    <div> 
        <h1> Hii Hello </h1>
        <label> Please Enter ur Name :  </label>
        <input type ="text" onChangeC={onChange}/>
    </div>
  )
}

export default Onc 