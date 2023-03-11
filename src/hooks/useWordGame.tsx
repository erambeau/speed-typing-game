import {useState, ChangeEvent, useEffect, useRef, MutableRefObject} from "react"

function useWordGame(timerValue = 5) {

  const [text, setText] = useState("")
  const [timer, setTimer] = useState(timerValue)
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
    setTimer(timerValue)
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

  return {text, timer, isTimeRunning, wordCounts, textBoxRef, handleChange, handleClickStartButton}

}

export default useWordGame