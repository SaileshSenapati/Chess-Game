import React, { Component } from "react";

class Rook extends Component{
    constructor(props){
        super(props);
        this.state = {
          boxColor: this.props.boxColor,
          boxKey: this.props.boxKey,
          player: this.props.player
        }
    }

    handelBoxClick(value,e){
      console.log(value)
      this.setState({
          newBoxKey : e.target.id,
          newboxColor : e.target.className,
          newBoxPiece : value
      })
      this.possiblePlaces()
  }

  possiblePlaces(){
    let arrVer = [];
    let arrHor = [];
    let value = 36;
    let temp = value % 8;
    console.log(value)
    for(let i=0; i<8; i++){
      arrVer.push(8*i+temp)
      arrHor.push(i+8*temp)
    }
    let index=arrVer.indexOf(value);
    arrVer.splice(index,1)
    arrHor.splice(index,1)
    console.log(arrVer,arrHor)
  }

    render(){
      const img_name = this.state.player===2 ? "images\\Black_rook.png" : "images\\White_rook.png";

        return(
            <React.Fragment>
              <div className={this.state.boxColor} key={this.state.boxKey} id={this.state.boxKey} onClick={(e)=>this.handelBoxClick('rook',e)}>
                <img src={img_name} className="piece" alt={img_name}></img>
              </div>
            </React.Fragment>
        )
    }
}

export default Rook;
