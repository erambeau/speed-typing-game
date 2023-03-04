import React, {useState, ChangeEvent} from "react"

function App() {

  const [text, setText] = useState("")

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const {value} = event.target
    setText(value)
  }

  function computeCountWords(inputText: string) {
    const wordsArr = inputText.trim().split(" ")
    const filteredWords = wordsArr.filter(word => word !== "")
    return filteredWords.length
  }

  return (
    <div className="App">
      <h1>How fast do you type ?</h1>
      <textarea 
        onChange={handleChange}
        value={text}
      />
      <h4>Remaining time : XX</h4>
      <button onClick={() => console.log(computeCountWords(text))}>Start</button>
      <h1>Word Count : XX</h1>
    </div>
  )
}

export default App