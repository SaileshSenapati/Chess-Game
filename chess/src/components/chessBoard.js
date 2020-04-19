import React, { Component } from "react";
import Rook from "./rook";

class ChessBoard extends Component{
    constructor(props){
        super(props);
        this.state = {
            element : [],
            board: []
        }
    }

    componentDidMount(){
        this.setElement();
    }

    setElement(){
        const element = [];
        for(let i=1; i<9; i++){
            for(let j=1; j<9; j++){
                if(i%2===0 && j%2===0){
                    let key =  i+""+j;
                    element.push(<div className='white' key={key} id={key} onClick={(e)=>this.handelBoxClick(null,0,e)}></div>)
                }else if(i%2!==0 && j%2!==0){
                    let key =  i+""+j;
                    element.push(<div className='white' key={key} id={key} onClick={(e)=>this.handelBoxClick(null,0,e)}></div>)
                }else if(i%2===0 && j%2!==0){
                    let key =  i+""+j;
                    element.push(<div className='black' key={key} id={key} onClick={(e)=>this.handelBoxClick(null,0,e)}></div>)
                }else if(i%2!==0 && j%2===0){
                    let key =  i+""+j;
                    element.push(<div className='black' key={key} id={key} onClick={(e)=>this.handelBoxClick(null,0,e)}></div>)
                }
            }
        }
        this.setState({
            element: element
        },()=>{this.createBoard()})
    }

    createBoard(){
        const board = [];
        let counter = 0;
        for(let i=0; i<8; i++){
            let temp = []
            for(let j=0; j<8; j++){
                counter = i*8 + j;
                temp.push(this.state.element[counter]);
            }
            board.push(temp);
        }
        const newElement = board.map((data,index)=>{
            return(
                <div key={index} className='row'>
                    {data}
                </div>
            )
        })

        this.setState({
            board: newElement
        })
    }

    handelBoxClick(piece,player,e){
        console.log(piece)
        this.setState({
            boxKey : e.target.id,
            boxColor : e.target.className,
            boxPiece : piece,
            player: player
        })
    }

    startGame=()=>{
        const temp = this.state.element;
        temp[0] = <Rook key="11" boxKey="11" boxColor="white" player={2} />
        temp[7] = <Rook key="18" boxKey="18" boxColor="black" player={2} />
        temp[56] = <Rook key="81" boxKey="81" boxColor="black" player={1} />
        temp[63] = <Rook key="88" boxKey="88" boxColor="white" player={1} />
        this.setState({
            element : [...temp]
        },()=>this.createBoard())
    }

    render(){
        return(
            <React.Fragment>
                {this.state.board}
                <button className="start-btn" onClick={this.startGame}>Start the Game</button>
            </React.Fragment>
        )
    }
}

export default ChessBoard;