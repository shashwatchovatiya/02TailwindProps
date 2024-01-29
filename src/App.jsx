import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <div className="flex justify-between mx-2 items-center">
     <Card  username="Shashwat"/>
     <Card  username="Mitanshu"/>
     <Card  username="Dhrumil"/>
     <Card  username="Rajat"/>

    </div>
    </>
  )
}

export default App
