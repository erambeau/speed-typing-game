import React, {useState, ChangeEvent, useEffect, useRef, MutableRefObject} from "react"

function App() {

  const DEFAULT_TIMER_VALUE = 5

  const [text, setText] = useState("")
  const [timer, setTimer] = useState(DEFAULT_TIMER_VALUE)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCounts, setWordCounts] = useState(0)

  const textBoxRef = useRef() as MutableRefObject<HTMLTextAreaElement>

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const {value} = event.target
    setText(value)
  }

  function computewordCounts(inputText: string) {
    const wordsArr = inputText.trim().split(" ")
    const filteredWords = wordsArr.filter(word => word !== "")
    return filteredWords.length
  }
  
  function handleClickStartButton(){
    setTimer(DEFAULT_TIMER_VALUE)
    setIsTimeRunning(true)
    setText("")
    setWordCounts(0)
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }

  function endGame() {
    setIsTimeRunning(false)
    setWordCounts(computewordCounts(text))
  }

  useEffect(() => {
    if(timer > 0 && isTimeRunning) {
      setTimeout(() => {setTimer(prevTimer => prevTimer-1)}, 1000)
    }
    else if(timer === 0) {
      endGame()
    }
  }, [timer, isTimeRunning])

  return (
    <div className="App">
      <h1>How fast do you type ?</h1>
      <textarea 
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
        ref={textBoxRef}
      />
      <h4>Remaining time : {timer}</h4>
      <button onClick={handleClickStartButton} disabled={isTimeRunning}>{isTimeRunning ? "Let's type !" : "Start"}</button>
      <h1>Word Count : {wordCounts}</h1>
    </div>
  )
}

export default App