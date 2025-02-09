import React from 'react'
import './StartGame.css'
import diceStart from '../../../public/dicestart.png'
import { Link, useNavigate } from 'react-router-dom'
const StartGame = () => {
    const navigate = useNavigate()
  return (
    <div className='Start-game'>
    <div className='left-container'>
       <img src={diceStart} alt="" />
    </div>
        
        <div className='right-container'>
            <h1>Dice Game</h1>
           <button onClick={()=>navigate('/play')}>Play Now</button>
        </div>
    </div>
  )
}

export default StartGame
