import React, { useState } from "react"

const App = () => {
  // const [count, setCount] = react.useState()
  const [count, setCount] = useState(0);

  // We + 1
  const handleClick= () => {
    setCount(count + 1)
  }
  
  // We - 1
  const minusClick = () => {
    setCount(count - 1)
  }


  return (
    <div>
      <h4>Count: {count}</h4>
      <button onClick={handleClick}>+</button>
      <button onClick={minusClick}>-</button>
    </div>
  )
}


export default App