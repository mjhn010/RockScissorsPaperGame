import React, { Component } from 'react'
import Frog from '../assets/frog.png'

export default class BoxClass extends Component {
    constructor(){
        super()
        this.result=""
    }
    box = ()=>{
        if(this.props.title == 'Computer' && this.props.result !== "tie" && this.props.result !==""){
            this.result = this.props.result == 'win' ? 'lose':'win'
        }else{
            this.result = this.props.result
        }
    }
  render() {
    this.box();
    return (
        <div className={`box ${this.result}`}>
        <div className='title-box'>
        <h1>{this.props.title}</h1>
        </div>
        <div className={`img-box`}>
          <img className='frog' src={Frog}/>
        <img className='hand-img' src={this.props.item && this.props.item.img}/>
        </div>
        <h2>{this.result}</h2>
      </div>
    )
  }
}
