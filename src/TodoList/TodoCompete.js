import React, { Component } from 'react'

export default class TodoCompete extends Component {
    isDone(idx,e){
        let check = e.target.checked;
        if(check == false){
            this.props.change(idx,check);
            e.target.checked = true;
        }
    }
    render() {
        return(
            <React.Fragment>
                <h1>已经完成：{this.props.com_todo.length}</h1>
                <ul>
                    {
                        this.props.com_todo.map((index,idx)=>
                                <li key={idx}>
                                    <input onClick={(e)=>this.isDone(idx,e)} type='checkbox' defaultChecked={true}/>
                                    {index}
                                    <button onClick={(e)=>this.props.del(idx,e)}>删除</button>
                                </li>
                         )
                     }
            </ul>
            </React.Fragment>
        )
    }
}
