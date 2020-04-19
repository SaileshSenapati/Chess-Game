import React, { Component } from "react";

class Queen extends Component{
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

  }

    render(){
      const img_name = this.state.player===2 ? "images\\Black_queen.png" : "images\\White_queen.png";

        return(
            <React.Fragment>
              <div className={this.state.boxColor} key={this.state.boxKey} id={this.state.boxKey} onClick={(e)=>this.handelBoxClick('queen',e)}>
                <img src={img_name} className="piece" alt={img_name}></img>
              </div>
            </React.Fragment>
        )
    }
}

export default Queen;
