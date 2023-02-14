import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [anecdoteIndex, setSelected] = useState(0);
  const [votes, setVoteCount] = useState(Array(anecdotes.length).fill(0));

  const [mostVotedAnecdoteIndex, setMostVotedAnecodeIndex] = useState();

  const setAnecdoteIndex = () => {
    let randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const castVote = () => {
    let arrayCopy = [...votes];
    arrayCopy[anecdoteIndex]++;
    setVoteCount(arrayCopy);
    setMostVotedAnecodeIndex(
      arrayCopy.reduce((maxIndex, currentValue, currentIndex, array) => {
        return currentValue > array[maxIndex] ? currentIndex : maxIndex;
      }, 0)
    );
  };

  return (
    <>
      <h1>Anecdote of the Day</h1>
      <div>{anecdotes[anecdoteIndex]}</div>
      <div>has {votes[anecdoteIndex]} votes</div>
      <Button handleClick={() => castVote()} text="vote"></Button>
      <Button
        handleClick={() => setAnecdoteIndex()}
        text="next anecdote"
      ></Button>
      <h1>Anecdote with the most votes</h1>
      <div>{anecdotes[mostVotedAnecdoteIndex]}</div>
    </>
  );
};

export default App;
