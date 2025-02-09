import React, { useState } from 'react'
import './PlayGame.css'
import ShowRule from '../ShowRule/ShowRule';
// import oneDice from '../../../public/1.png'
const PlayGame = () => {

  const arrNumber = [1,2,3,4,5,6];
  const [ selectedNumber, setSelectedNumber] = useState();
  console.log(selectedNumber)
  
  const [currentDice, setCurrentDice] = useState(1)
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRule, setShowRule] = useState(false)

  const  getRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min))
    return Math.floor(Math.random() * (max - min) + min);
  }

  const rollDice = () => {
    if(!selectedNumber) 
    {
      setError("You have not selected any number")
      return;
    }
    else
    {
      setError("");
    }

    const randomNumber = getRandomNumber(1,7)
    setCurrentDice(randomNumber)
    
    
    if (selectedNumber===randomNumber)
    {
      setScore(randomNumber)
    }
    else
    {
      setScore(randomNumber-2)

    }
    setSelectedNumber(undefined)
  }

  const numberselectedHandler = (value) => {
     setSelectedNumber(value)
     setError("");
  }
  return (
    <div className='play-container'>
        <div className='top-container'>
            <div className='play-left'>
                <h1>{score}</h1>
                <h3>Total Score</h3>
            </div>
            <div className='play-right'>
            <p className='error-msg'>{error}</p>
            <div>
            {
              arrNumber.map((value,index) => {
                return (
                  <button
                   onClick={()=>numberselectedHandler(value)}
                   className={value===selectedNumber ? "black" : "white"} key={index}>{value}</button>

                )
              })
            }
            </div>
              <h3>Select Number</h3>
            </div>
        </div>
        <div className='center-container'>
          <img onClick={rollDice}
          src={`./${currentDice}.png`} alt="dice1" />
          <h4>Click on Dice to roll</h4>
          
          <button onClick={()=>setScore(0)} className='btn-reset'>Reset Score</button>
          <br />
          <button onClick={()=>setShowRule(!showRule)}
           className='btn-rules'>Show Rules</button>
        </div>

        <div className={showRule ? "Hide":"Show"}>
        <h2>How to play dice game</h2>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
    </div>
    </div>
  )
}

export default PlayGame
