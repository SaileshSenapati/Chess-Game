import React, { Component } from "react";
import Rook from "./Rook";
import Knight from "./Knight";
import Bishop from "./Bishop";
import King from "./King";
import Queen from "./Queen";
import Pawn from "./Pawn";


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
        for(let i=1; i<=8; i++){
            for(let j=1; j<=8; j++){
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

        temp[1] = <Knight key="12" boxKey="12" boxColor="black" player={2} />
        temp[6] = <Knight key="17" boxKey="17" boxColor="white" player={2} />
        temp[57] = <Knight key="82" boxKey="82" boxColor="white" player={1} />
        temp[62] = <Knight key="87" boxKey="87" boxColor="black" player={1} />

        temp[2] = <Bishop key="13" boxKey="13" boxColor="white" player={2} />
        temp[5] = <Bishop key="16" boxKey="16" boxColor="black" player={2} />
        temp[58] = <Bishop key="83" boxKey="83" boxColor="black" player={1} />
        temp[61] = <Bishop key="86" boxKey="86" boxColor="white" player={1} />

        temp[4] = <King key="15" boxKey="15" boxColor="white" player={2} />
        temp[60] = <King key="85" boxKey="85" boxColor="black" player={1} />

        temp[3] = <Queen key="14" boxKey="14" boxColor="black" player={2} />
        temp[59] = <Queen key="84" boxKey="84" boxColor="white" player={1} />

        temp[8] = <Pawn key="21" boxKey="21" boxColor="black" player={2} />
        temp[9] = <Pawn key="22" boxKey="22" boxColor="white" player={2} />
        temp[10] = <Pawn key="23" boxKey="23" boxColor="black" player={2} />
        temp[11] = <Pawn key="24" boxKey="24" boxColor="white" player={2} />
        temp[12] = <Pawn key="25" boxKey="25" boxColor="black" player={2} />
        temp[13] = <Pawn key="26" boxKey="26" boxColor="white" player={2} />
        temp[14] = <Pawn key="27" boxKey="27" boxColor="black" player={2} />
        temp[15] = <Pawn key="28" boxKey="28" boxColor="white" player={2} />

        temp[48] = <Pawn key="71" boxKey="71" boxColor="white" player={1} />
        temp[49] = <Pawn key="72" boxKey="72" boxColor="black" player={1} />
        temp[50] = <Pawn key="73" boxKey="73" boxColor="white" player={1} />
        temp[51] = <Pawn key="74" boxKey="74" boxColor="black" player={1} />
        temp[52] = <Pawn key="75" boxKey="75" boxColor="white" player={1} />
        temp[53] = <Pawn key="76" boxKey="76" boxColor="black" player={1} />
        temp[54] = <Pawn key="77" boxKey="77" boxColor="white" player={1} />
        temp[55] = <Pawn key="78" boxKey="78" boxColor="black" player={1} />

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
