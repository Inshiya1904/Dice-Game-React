import React from 'react'
import StartGame from './Components/StartGame/StartGame'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayGame from './Components/PlayGame/PlayGame';

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartGame/>}/>
        <Route path='/play' element={<PlayGame/>}/>

      </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default App
