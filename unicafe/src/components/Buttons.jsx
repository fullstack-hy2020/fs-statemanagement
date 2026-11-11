import { useActions } from '../store'

const Buttons = () => {
  const { incrementGood, incrementNeutral, incrementBad } = useActions()

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => {console.log("incrementing good");incrementGood()}}>good</button>
      <button onClick={incrementNeutral}>neutral</button>
      <button onClick={incrementBad}>bad</button>
    </div>
  )
}

export default Buttons
