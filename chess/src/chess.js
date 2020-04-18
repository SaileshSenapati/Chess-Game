import React, { Component } from 'react';
import ChessBoard from "./components/chessBoard"

class Chess extends Component{
    constructor(props){
        super(props);
        this.state = {
            element : null
        }
    }

    setBoard = (element , boardElement)=>{
        this.setState({
            element : element,
            boardElement : boardElement
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="welcome-text">
                    <ChessBoard setBoard={this.setBoard} />
                </ div>
            </React.Fragment>
        )
    }
}

export default Chess;

