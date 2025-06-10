import styled from 'styled-components'
import { useState } from 'react'

const App = () => {
    const arr = ["rock", "paper", "scissors"];
    const [yourScore, setYouScore] = useState(0);
    const [compScore, setCompScore] = useState(0);
    const [message, setMessage] = useState("Start the Game")

    const genRandomNum = (min, max) =>{
    return (Math.floor(Math.random() * (max - min) + min));
  }


    const gamePlayer = (playerChoice)=>{
        const randNum = genRandomNum(0,3);
        const compChoice  = arr[randNum];
        if(compChoice === playerChoice){
            setMessage("Draw");
        }
        else if((playerChoice === "rock" && compChoice === "scissors")||
                (playerChoice === "paper" && compChoice === "rock")||
                (playerChoice === "scissors" && compChoice === "paper")
        ){
            setYouScore((prev)=>prev+1);
            setMessage("You won")
        }
        else{
            setCompScore((prev)=>prev+1);
            setMessage("You lost")

        }
    }
    const reset = () => {
        setYouScore(0);
        setCompScore(0);
    }

  return (
    <>
    <Heading>
      Rock Paper and Scissors Game
    </Heading>
    <GameContainer>
        <Images>
            <div className='image'><img onClick={()=>gamePlayer("rock")} src='/images/rock.png'/> </div>
            <div className='image'><img onClick={()=>gamePlayer("paper")} src='/images/paper.png'/> </div>
            <div className='image'><img onClick={()=>gamePlayer("scissors")} src='/images/scissors.png'/> </div>
        </Images>
        <Score>
            <div className='scores'>
                <h1>{yourScore}</h1>
                <h1>Your Score</h1>
            </div>
            <div className='scores'>
                <h1>{compScore}</h1>
                <h1>Computer Score</h1>
            </div>
        </Score>
        <ResetScore onClick={reset}>
            Reset Score
        </ResetScore>
        <Message>
            {message}
        </Message>
    
    </GameContainer>
    </>
  )
}

export default App

const Heading = styled.div `
    width: 100%;
    padding: 25px 0;
    font-size: 32px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffe4c4;
`
const GameContainer = styled.div `
    max-width: 1280px;
    height: calc(100vh - 98px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
const Images = styled.div `
    max-width: 100%;
    padding: 30px 20px;
    display: flex;
    justify-content: center;
    gap: 72px;


    .image{
        width: 200px;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
    
        img{
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            cursor: pointer;
            transition: 0.3s background ease-in;

            &:hover{
                opacity: 0.8;
                border: 10px solid black;
                transition: 0.3s background ease-in;
            }
        }
    }
`
const Score = styled.div `
    max-width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    gap: 10rem;

.scores{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        font-size: 44px;
        font-weight: 400;
    }
}
`
const ResetScore = styled.button`
    max-width: 250px;
    padding: 18px 10px;
    margin-top: 44px;
    background-color: #6495ed;
    color: white;
    font-size: 24px;
    font-weight: 500;
    border: none;
    border-radius: 15px;
    cursor: pointer;
`
const Message = styled.div   `
    max-width: 250px;
    padding: 18px 10px;
    margin-top: 44px;
    background-color: #6495ed;
    color: white;
    font-size: 24px;
    font-weight: 500;
    border: none;
    border-radius: 25px;
`