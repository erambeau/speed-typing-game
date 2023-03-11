import useWordGame from './hooks/useWordGame'

function App() {

  const {text, timer, isTimeRunning, wordCounts, textBoxRef, handleChange, handleClickStartButton} = useWordGame()

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