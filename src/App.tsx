import React, {useState, ChangeEvent, useEffect} from "react"

function App() {

  const DEFAULT_TIMER_VALUE = 10

  const [text, setText] = useState("")
  const [timer, setTimer] = useState(DEFAULT_TIMER_VALUE)
  const [isTimeRunning, setIsTimeRunning] = useState(false)

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const {value} = event.target
    setText(value)
  }

  function computeCountWords(inputText: string) {
    const wordsArr = inputText.trim().split(" ")
    const filteredWords = wordsArr.filter(word => word !== "")
    return filteredWords.length
  }
  
  useEffect(() => {
    if(timer > 0 && isTimeRunning) {
      setTimeout(() => {setTimer(prevTimer => prevTimer-1)}, 1000)
    }
    else if(timer === 0) {
      setIsTimeRunning(false)
    }
  }, [timer, isTimeRunning])

  function handleClickStartButton(){
    setTimer(DEFAULT_TIMER_VALUE)
    setIsTimeRunning(true)
  }

  return (
    <div className="App">
      <h1>How fast do you type ?</h1>
      <textarea 
        onChange={handleChange}
        value={text}
      />
      <h4>Remaining time : {timer}</h4>
      <button onClick={handleClickStartButton}>Start</button>
      <h1>Word Count : XX</h1>
    </div>
  )
}

export default App