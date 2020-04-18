import React, { Component } from "react";

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
        for(let i=0; i<8; i++){
            for(let j=0; j<8; j++){
                if(i%2===0 && j%2===0){
                    let key =  i+""+j;
                    element.push(<div className='white' key={key} id={key}></div>)
                }else if(i%2!==0 && j%2!==0){
                    let key =  i+""+j;
                    element.push(<div className='white' key={key} id={key}></div>)
                }else if(i%2===0 && j%2!==0){
                    let key =  i+""+j;
                    element.push(<div className='black' key={key} id={key}></div>)
                }else if(i%2!==0 && j%2===0){
                    let key =  i+""+j;
                    element.push(<div className='black' key={key} id={key}></div>)
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
        const newElement = makeBoard.map((data,index)=>{
            return(
                <div key={index} className='row'>
                    {data}
                </div>
            )
        })

        this.setState({
            element: newElement
        })
    }

    render(){
        return(
            <React.Fragment>
                {this.state.element}
            </React.Fragment>
        )
    }
}

export default ChessBoard;