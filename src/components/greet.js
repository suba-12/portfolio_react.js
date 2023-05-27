import React from 'react'

function Greet(props){

    
    console.log(props)
    return (
        <div>
    <h1>
       HELLO BUDDY {props.name} profession {props.dept}
       </h1>
   {props.children}
   </div>
)
   }

export default Greet

