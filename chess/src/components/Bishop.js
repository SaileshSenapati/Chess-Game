import React, { Component } from "react";

class Bishop extends Component{
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
      const img_name = this.state.player===2 ? "images\\Black_bishop.png" : "images\\White_bishop.png";

        return(
            <React.Fragment>
              <div className={this.state.boxColor} key={this.state.boxKey} id={this.state.boxKey} onClick={(e)=>this.handelBoxClick('bishop',e)}>
                <img src={img_name} className="piece" alt={img_name}></img>
              </div>
            </React.Fragment>
        )
    }
}

export default Bishop;
