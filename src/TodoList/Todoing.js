import React, { Component } from 'react'

export default class Todoing extends Component {
    //判断是否点击
    isDone(idx,e){
        let check = e.target.checked;
        // console.log(check);
        if(check == true){
            // console.log(idx);
            // console.log(check);
            this.props.change(idx,check);
            // console.log(e.target);
            e.target.checked = false;
        }
    }
    render() {
        var {todo} = this.props;
        return(
            <React.Fragment>
            <h1>正在进行:{todo.length}</h1>
            <ul>
                {
                    todo.map((index,idx)=>
                        <li key={idx}>
                            <input onClick={(e)=>this.isDone(idx,e)} type='checkbox' defaultChecked={false}/>
                            {index}
                            <button onClick={(e)=>this.props.del1(idx,e)}>删除</button>
                        </li>
                    )
                }
            </ul>
            </React.Fragment>
        )
    }
}
