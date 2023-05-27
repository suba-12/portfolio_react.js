import React, { useState } from 'react'

function Fave() {
    const [color,setColor] = useState("red");
  return (
    <>
    <h1>My fav cor is {color}</h1>
    <button onClick={e => setColor("green")}>change</button>
    </>
  )
}

export default Fave