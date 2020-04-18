import React, { Component } from 'react';

class Chess extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
    }

    createRow(){
        const element = (
            <React.Fragment>
                <div className="row">
                    <div className='black'></div>
                    <div className='white'></div>
                    <div className='black'></div>
                    <div className='white'></div>
                    <div className='black'></div>
                    <div className='white'></div>
                    <div className='black'></div>
                    <div className='white'></div>            
                </div>
                <div className='row'>
                    <div className='white'></div>
                    <div className='black'></div>
                    <div className='white'></div>
                    <div className='black'></div>
                    <div className='white'></div>
                    <div className='black'></div>
                    <div className='white'></div>
                    <div className='black'></div>
                </div>
            </ React.Fragment>
        )
        return element;
    }

    render(){
        return(
            <React.Fragment>
                <div className="welcome-text">
                    {this.createRow()}
                    {this.createRow()}
                    {this.createRow()}
                    {this.createRow()}
                </ div>
            </React.Fragment>
        )
    }
}

export default Chess;

