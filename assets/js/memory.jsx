import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

export default function run_game(root) {
  ReactDOM.render(<MemoryGame />, root);
}

class MemoryGame extends React.Component {
  constructor(props) {
    super(props);
    
    // create protoarray for tileShowStatus
    var protoarr = new Array(16);
    protoarr.fill(false, 0, 16);
    
    // fill in initial state
    this.state = {
      numClicks: 0,
      currentTile: "",
      tileShowStatus: protoarr,
      matchStatus: {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
      },
    };
  }
  
  // Game Functions
  tileOnClick() {
    /*
      current tile?
        return, don't update state
        
      
    
    
    */
  }
  
  markTileCompleted(letter) {
    
  }
  
  holdUI() {
    
  }

  // Render function
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col"><Tile root={this} letter="A" tid="0"/></div>
          <div className="col"><Tile root={this} letter="A" tid="1"/></div>
          <div className="col"><Tile root={this} letter="B" tid="2"/></div>
          <div className="col"><Tile root={this} letter="B" tid="3"/></div>
        </div>
        <div className="row">
          <div className="col"><Tile root={this} letter="C" tid="4"/></div>
          <div className="col"><Tile root={this} letter="C" tid="5"/></div>
          <div className="col"><Tile root={this} letter="D" tid="6"/></div>
          <div className="col"><Tile root={this} letter="D" tid="7"/></div>
        </div>
        <div className="row">
          <div className="col"><Tile root={this} letter="E" tid="8"/></div>
          <div className="col"><Tile root={this} letter="E" tid="9"/></div>
          <div className="col"><Tile root={this} letter="F" tid="10"/></div>
          <div className="col"><Tile root={this} letter="F" tid="11"/></div>
        </div>
        <div className="row">
          <div className="col"><Tile root={this} letter="G" tid="12"/></div>
          <div className="col"><Tile root={this} letter="G" tid="13"/></div>
          <div className="col"><Tile root={this} letter="H" tid="14"/></div>
          <div className="col"><Tile root={this} letter="H" tid="15"/></div>
        </div>
      </div>
    );
  }
  
}

// form elements
function Tile(params) {
  // check if tile is completed
  let letter = params.letter;
  let matchStatus = params.root.state.matchStatus[letter];
  
  let tid = params.tid;
  let showStatus = params.root.state.tileShowStatus[tid];
  //console.log("Tid: " + tid + ", Show status :" + showStatus);
  
  // check for ways we might need to show tile
  if (matchStatus || showStatus) {
    //console.log("Showing element");
    return (
      <div className="border border-primary tile text-center align-middle">
        <p>{ params.letter }</p>
      </div>
    );
  } else {
    return (
       <div className="border border-primary tile text-center align-middle">
        <p></p>
      </div>
    );
  }
}
