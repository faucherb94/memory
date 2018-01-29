import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

export default function run_game(root) {
  ReactDOM.render(<MemoryGame />, root);
}

class MemoryGame extends React.Component {
  constructor(props) {
    super(props);
    
    // fill in initial state
    this.state = {
      score: 0,
      currentGuess: -1,
      tiles: getNewTiles(),
    };
  }
  
  isGameComplete() {
    
  }
  
  // Game Functions
  tileOnClick(tid) {
    
    /*
      increment score
      
      another tile has been picked?
        letters match?
          mark letter as matched in matchStatus
        else:
          hold UI for a sec, then clear showStatus and currentGuess
      first tile picked?
        mark selected
        
      update state
    */    
    
    let newTiles = this.state.tiles.slice();
    let newScore = this.state.score + 1;
    let newCurrentGuess = -1;
    
    if(this.state.currentGuess == -1) {
      // first move
      newTiles[tid].status = "selected"
      newCurrentGuess = tid;
      console.log("Selected " + tid);
      // tile will show on state change
    } else if (this.state.currentGuess = tid) {
      // match found
      newTiles[tid].status = "matched";
      newTiles[this.state.currentGuess].status = "matched";
      console.log("Found match");
      // both tiles will show on state change
    } else {
      // match not found
      console.log("Match not found"); 
    }
    
    this.setState({
      score: newScore,
      currentGuess: newCurrentGuess,
      tiles: newTiles,
    })
  }
  
  holdUI() {
    
  }
  
  resetBoard() {
    
  }
  
  renderTile(i) {
    return (
      <Tile tid={i} letter={this.state.tiles[i].letter} status={this.state.tiles[i].status} onClick={() => this.tileOnClick(i)}/>
    );
  }

  // Render function
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">{this.renderTile(0)}</div>
          <div className="col">{this.renderTile(1)}</div>
          <div className="col">{this.renderTile(2)}</div>
          <div className="col">{this.renderTile(3)}</div>
        </div>
        <div className="row">
          <div className="col">{this.renderTile(4)}</div>
          <div className="col">{this.renderTile(5)}</div>
          <div className="col">{this.renderTile(6)}</div>
          <div className="col">{this.renderTile(7)}</div>
        </div>
        <div className="row">
          <div className="col">{this.renderTile(8)}</div>
          <div className="col">{this.renderTile(9)}</div>
          <div className="col">{this.renderTile(10)}</div>
          <div className="col">{this.renderTile(11)}</div>
        </div>
        <div className="row">
          <div className="col">{this.renderTile(12)}</div>
          <div className="col">{this.renderTile(13)}</div>
          <div className="col">{this.renderTile(14)}</div>
          <div className="col">{this.renderTile(15)}</div>
        </div>
      </div>
    );
  }
  
}

// form elements
function Tile(params) {
  let status = params.status;
  if (status == "selected" || status == "matched") {
    // note: not binding click function if tile is shown
    return (
      <div className="border border-primary tile text-center align-middle">
        <p>{ params.letter }</p>
      </div>
    );
  } else {
    return (
       <div className="border border-primary tile text-center align-middle" onClick={params.onClick}>
        <p></p>
      </div>
    );
  }
}

function getNewTiles() {
  var protoarr = new Array(16);
  protoarr.fill({letter: "A", status: "unmatched"}, 0, 2);
  protoarr.fill({letter: "B", status: "unmatched"}, 2, 4);
  protoarr.fill({letter: "C", status: "unmatched"}, 4, 6);
  protoarr.fill({letter: "D", status: "unmatched"}, 6, 8);
  protoarr.fill({letter: "E", status: "unmatched"}, 8, 10);
  protoarr.fill({letter: "F", status: "unmatched"}, 10, 12);
  protoarr.fill({letter: "G", status: "unmatched"}, 12, 14);
  protoarr.fill({letter: "H", status: "unmatched"}, 14, 16);
  
  return protoarr;
}
