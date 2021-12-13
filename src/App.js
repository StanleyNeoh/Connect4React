import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import {Button, Container, Row, Col} from "react-bootstrap"

const NROWS = 6;
const NCOLS = 7;
const Red = "Red";
const Yellow = "Yellow";

function GreenCircle(props){    //Display winning move
  if(props.winning){
    return (
      <Container 
        variant="success" 
        className={"rounded-circle"} 
        style={
          {
            backgroundColor: "green",
            maxWidth: "50%",
            height: "50%"
          }
        }
      />
    );
  } else {
    return null;
  }
}

function Box(props){
  const col = props.col;
  const symbol = props.symbol;
  const color = symbol === " " 
                ? "white"
                : symbol === Yellow
                ? "yellow"
                : "red";
  return (
        <Col  
          className="d-flex justify-items-center align-items-center p-0" //d-flex necessary
          style={
            { 
              pointerEvents:"all",
              backgroundColor : "blue",
              maxWidth: "100px",
              height: "100px"
            }
          } 
          onClick={()=>props.handleClick(col)}
        >
            <Container
              className="rounded-circle d-flex align-items-center justify-content-center" 
              style={
                {
                  backgroundColor: color,
                  width: "95%",
                  height: "95%"
                }
              }> <GreenCircle winning={props.winning}/> </Container>  
        </Col>
      );
}

function Board(props){
  const winningMoves = props.winningMoves;
  const board = [];
  let i = 0;
  for(let r = 0; r < NROWS; r++){
    const row = [];
    for(let c = 0; c < NCOLS; c++){
      const winning = winningMoves.reduce(
                        (y, x) => y || (x[0]===r && x[1]===c),
                        false);
      row[c] = <Box key={i++} col={c} symbol={props.grid[r][c]} handleClick={props.handleClick} winning={winning}/>
    }
    board[r] = <Row className="d-flex justify-content-center flex-nowrap" key={r}>{row}</Row>;
  }
  return board;
}
    
class Game extends React.Component{
  makeEmptyArr(){
    let arr = [];
    for(let r = 0; r < NROWS; r++){
      let row = [];
      for(let c = 0; c<NCOLS; c++){
        row[c] = " ";
      }
      arr[r] = row;
    }
    return arr;
  }

  constructor(props){
    super(props);
    this.state = {turn: Red, grid: this.makeEmptyArr(), winner: " ", winningMoves:[]};
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  dropPiece(symbol, col, grid){
    for(let r=NROWS-1; r>=0; r--){
      if(grid[r][col] === " "){
        grid[r][col] = symbol;
        return true;
      }
    }
    return false;
  }

  checkWin(grid){
    for(let r = 0; r < NROWS; r++){
      let score = 1;
      let state = grid[r][0];
      for(let c = 1; c < NCOLS; c++){
        if(grid[r][c] === state){
          if(state !== " "){
            score++;
          }
        } else {
          state = grid[r][c];
          score = 1;
        }
        if(score >= 4){
          let arr = [];
          for(let i = 0; i < 4; i++){
            arr[i] = [r,c-i];
          }
          console.log("from rows");
          console.log(arr);
          return [grid[r][c], arr];
        }
      }
    }
    for(let c = 0; c < NCOLS; c++){
      let score = 0;
      let state = grid[0][c];
      for(let r = 0; r < NROWS; r++){
        if(grid[r][c] === state){
          if(state !== " "){
            score++;
          }
        } else {
          state = grid[r][c];
          score = 1;
        }
        if(score >= 4){
          let arr = [];
          for(let i = 0; i < 4; i++){
            arr[i] = [r-i,c];
          }
          console.log("from columns");
          console.log(arr);
          return [grid[r][c], arr];
        }
      }
    }
    for(let r = 0; r < NROWS - 3; r++){
      for(let c = 0; c < NCOLS - 3; c++){
        let state = grid[r][c];
        if(state !== " "){
          let arr = [[r,c]];
          for(let i = 1; i < 4; i++){
            if(grid[r+i][c+i] === state){
              arr[i] = [r+i, c+i];
            } else {
              break;
            }
          }
          if(arr.length >= 4){
            console.log("from diag1")
            console.log(arr);
            return [state, arr];
          }
        }
      }
    }
    for(let r = 3; r < NROWS; r++){
      for(let c = 0; c < NCOLS - 3; c++){
        let state = grid[r][c];
        if(state !== " "){
          let arr = [[r,c]];
          for(let i = 1; i < 4; i++){
            if(grid[r-i][c+i] === state){
              arr[i] = [r-i, c+i];
            } else {
              break;
            }
          }
          if(arr.length >= 4){
            console.log("from diag2");
            console.log(arr);
            return [state, arr]
          }
        }
      }
    }
    return [" ", []];
  }

  handleClick(col){
    if(this.state.winner !== " "){
      return;
    }
    const currturn = this.state.turn;
    if(this.dropPiece(currturn, col, this.state.grid)){
      const [win, winningMoves] = this.checkWin(this.state.grid);
      this.setState({
        turn: currturn === Red ? Yellow : Red,   //Usually should update grid without mutation but shouldnt be a problem as turn is updated
        grid: this.state.grid,
        winner: win,
        winningMoves: winningMoves
      })
    }
    console.log(this.state.grid);
  }

  handleReset(){
    this.setState({turn: Red, grid: this.makeEmptyArr(), winner: " ", winningMoves: []});
  }

  render(){
    const winner = this.state.winner;
    const msg = winner === " "
                ? "It is currently " + this.state.turn + "'s turn"
                : "Game Over! " + this.state.winner + " has won the game!";
    const opacity = winner === " " ? 100: 50;
    return (
      <div>
        
        <Container className={"opacity-" + opacity}>
          <Board grid={this.state.grid} handleClick={this.handleClick} winningMoves={this.state.winningMoves}/>
        </Container>
        <h1>{msg}</h1>
        <Button className="m-5 lg" onClick={this.handleReset}>Reset the Board</Button>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App" style={{backgroundColor:'azure'}}>
      <h1>Connect 4 with react-bootstrap by Stanley</h1>
      <Game/>
    </div>
  );
}

export default App;
