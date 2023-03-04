import React, {useState, ChangeEvent, useEffect} from "react"

function App() {

  const [text, setText] = useState("")
  const [timer, setTimer] = useState(10)

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
    if(timer > 0) {
      setTimeout(() => {setTimer(prevTimer => prevTimer-1)}, 1000)
    }
  }, [timer])

  return (
    <div className="App">
      <h1>How fast do you type ?</h1>
      <textarea 
        onChange={handleChange}
        value={text}
      />
      <h4>Remaining time : {timer}</h4>
      <button onClick={() => console.log(computeCountWords(text))}>Start</button>
      <h1>Word Count : XX</h1>
    </div>
  )
}

export default App