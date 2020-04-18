import React, { Component } from "react";
import Rook from "./pieces"
class ChessBoard extends Component{
    constructor(props){
        super(props);
        this.state = {
            element : []
        }
    }

    componentDidMount(){
        this.createBoard();
    }

    createBoard(){
        const element = [];
        var pieces_img_names = ["Black_rook.png",
                              "Black_knight.png",
                              "Black_bishop.png",
                              "Black_queen.png",
                              "Black_king.png",
                              "Black_bishop.png",
                              "Black_knight.png",
                              "Black_rook.png",

                              "Black_pawn.png",
                              "Black_pawn.png",
                              "Black_pawn.png",
                              "Black_pawn.png",
                              "Black_pawn.png",
                              "Black_pawn.png",
                              "Black_pawn.png",
                              "Black_pawn.png",

                              "White_pawn.png",
                              "White_pawn.png",
                              "White_pawn.png",
                              "White_pawn.png",
                              "White_pawn.png",
                              "White_pawn.png",
                              "White_pawn.png",
                              "White_pawn.png",

                              "White_rook.png",
                              "White_knight.png",
                              "White_bishop.png",
                              "White_queen.png",
                              "White_king.png",
                              "White_bishop.png",
                              "White_knight.png",
                              "White_rook.png"]
          var class_name = null;
          var img_name = null;
          for(var i=0;i<8;i++){
            for(var j=0;j<8;j++){
              let key =  i+""+j;
              if((i%2===0 && j%2===0) || (i%2!==0 && j%2!==0)){
                class_name = "white"
              }
              else if((i%2===0 && j%2!==0) || (i%2!==0 && j%2===0)){
                class_name = "black"
              }
              if(i===0){
                img_name = "images\\"+pieces_img_names[j];
              }
              else if(i===1){
                img_name = "images\\"+pieces_img_names[j+8];
              }
              else if(i===6){
                img_name = "images\\"+pieces_img_names[j+8*2];
              }
              else if(i===7){
                img_name = "images\\"+pieces_img_names[j+8*3];
              }
              if((i>=0 && i<=1) || (i>=6 && i<=7)){
                element.push(<div className={class_name} key={key} id={key}>
                              <img src  = {img_name} className="piece" alt={img_name}>
                              </img>
                             </div>)

              }
              else{
                  element.push(<div className={class_name} key={key} id={key}></div>)
              }
            }
          }

        const makeBoard = [];
        let counter = 0;
        for(let i=0; i<8; i++){
            let temp = []
            for(let j=0; j<8; j++){
                counter = i*8 + j;
                temp.push(element[counter]);
            }
            makeBoard.push(temp);
        }
        var board = makeBoard.map((data,index)=>{
            return(
                <div key={index} className='row'>
                    {data}
                </div>
            )
        })

        this.setState({
            element: board
        })
        this.props.setBoard(element , board)
    }
    

    startGame =()=>{
      //Assuming p1 is always chooses White

    }

    render(){
        return(
            <React.Fragment>
                <button className="start-btn" onClick={this.startGame}>Start the game</button>
            </React.Fragment>
        )
    }
}

export default ChessBoard;
