import "./App.css";
import Sml from "./component/sml";
import imgOne from "./img/images (1).jpeg";
import imgTwo from "./img/img2.jpeg";
import imgTree from "./img/img3.jpeg";
import imgFore from "./img/img4.jpeg";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: this.getInitialVotes(),
      winner: null,
    };
  }

  getInitialVotes() {
    const savedVotes = localStorage.getItem("votes");
    return savedVotes ? JSON.parse(savedVotes) : [0, 0, 0, 0];
  }

  updateVote = (index) => {
    const newVotes = [...this.state.votes];
    newVotes[index] += 1;
    this.setState({ votes: newVotes });
    localStorage.setItem("votes", JSON.stringify(newVotes));
  };

  showResults = () => {
    const maxVotes = Math.max(...this.state.votes);
    const winnerIndex = this.state.votes.indexOf(maxVotes);
    this.setState({ winner: winnerIndex });
  };

  clearResults = () => {
    this.setState({ votes: [0, 0, 0, 0], winner: null });
    localStorage.removeItem("votes");
  };

  render() {
    const images = [imgOne, imgTwo, imgTree, imgFore];
    const { votes, winner } = this.state;
    return (
      <div className="container">
        <h1>Voting for the best emoticon!</h1>
        <div className="sml-row">
          {images.map((img, index) => (
            <Sml key={index} src={img} onClick={() => this.updateVote(index)} count={votes[index]} />
          ))}
        </div>
        <div className="btn-container">
          <button className="btn" onClick={this.showResults}>Show Results</button>
          <button className="btn" onClick={this.clearResults}>Clear Results</button>
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
}

export default App;