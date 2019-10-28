import React, { Component } from 'react'

export default class TodoInput extends Component {
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.add(e.target.value);
            e.target.value = '';
        }
    }
    render() {
        return (
            <div>
                <input  onKeyDown = {this.handleInput} type='text' placeholder='添加Todo'/>
            </div>
        )
    }
}
