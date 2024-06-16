import { useState } from 'react'
import './App.css'
import User from './User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <User
        user={{ name: "John" }}
        onNameClick={() => console.log("clicked")}
      />
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}

export default App
