import React, { Component } from "react";

class King extends Component{
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
    let value = 0;
    let arr = [value-9,value-8,value-7,value-1,value+1,value+7,value+8,value+9];
    let length = arr.length;
    let newArr = [];
    //  dispose outer values
    for(let i=0; i<length; i++){
      if(arr[i]>-1 && arr[i]<64){
        newArr.push(arr[i])
      }
    }
    //  set edge values

    console.log(value)
    console.log(newArr)
  }

    render(){
      const img_name = this.state.player===2 ? "images\\Black_king.png" : "images\\White_king.png";

        return(
            <React.Fragment>
              <div className={this.state.boxColor} key={this.state.boxKey} id={this.state.boxKey} onClick={(e)=>this.handelBoxClick('king',e)}>
                <img src={img_name} className="piece" alt={img_name}></img>
              </div>
            </React.Fragment>
        )
    }
}

export default King;
