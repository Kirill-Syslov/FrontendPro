import { useState, useEffect } from "react";
import "./App.css";
import Sml from "./component/sml";
import imgOne from "./img/images (1).jpeg";
import imgTwo from "./img/img2.jpeg";
import imgTree from "./img/img3.jpeg";
import imgFore from "./img/img4.jpeg";

const App = () => {
  const [votes, setVotes] = useState(() => getInitialVotes());
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(votes));
  }, [votes]);

  function getInitialVotes() {
    const savedVotes = localStorage.getItem("votes");
    return savedVotes ? JSON.parse(savedVotes) : [0, 0, 0, 0];
  }

  const updateVote = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
  };

  const showResults = () => {
    const maxVotes = Math.max(...votes);
    const winnerIndex = votes.indexOf(maxVotes);
    setWinner(winnerIndex);
  };

  const clearResults = () => {
    setVotes([0, 0, 0, 0]);
    setWinner(null);
    localStorage.removeItem("votes");
  };

  const images = [imgOne, imgTwo, imgTree, imgFore];
  
  return (
    <div className="container">
      <h1>Voting for the best emoticon!</h1>
      <div className="sml-row">
        {images.map((img, index) => (
          <Sml key={index} src={img} onClick={() => updateVote(index)} count={votes[index]} />
        ))}
      </div>
      <div className="btn-container">
        <button className="btn" onClick={showResults}>Show Results</button>
        <button className="btn" onClick={clearResults}>Clear Results</button>
      </div>
      {winner !== null && (
        <div>
          <h1>Voting result</h1>
          <h1>Winner:</h1>
          <div>
            <img className="winner-img" src={images[winner]} alt="Winner" />
          </div>
          <h1>Number of votes: {votes[winner]}</h1>
        </div>
      )}
    </div>
  );
}

export default App;
