import React, { useState } from 'react'

const Counter = function () {
  const [count, setCount] = useState(0)

  function incr () {
    setCount(count + 1);
  }

  function desc () {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>

      <button onClick = {incr}>Incr</button>

      <button onClick = {desc}>Desc</button> 
    </div>
  )
}

export default Counter