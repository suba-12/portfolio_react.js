import React, { useEffect, useState } from 'react'

function Another() {
    const [count,setCount] =useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount(() => count+1);
        },2000);
    })

  return (
    <h1> I have a count{count}</h1>
  )
}

export default Another