import React, { Component } from 'react'
import TodoInput from './TodoInput'
import Todoing from './Todoing'
import TodoCompete from './TodoCompete'


export default class TodoList extends Component {
    constructor(){
        super();
        this.state={
            todo:[],
            com_todo:[]
        }
    }
    componentDidMount() {
        this.setState({
            todo:JSON.parse(localStorage.getItem('todo')) || [],
            com_todo:JSON.parse(localStorage.getItem('com_todo')) || []
        })
    }
    //正在进行添加数据
    addItem = (data)=>{
        this.setState({
            todo:[...this.state.todo,data]
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todo))
        })
    }
    //正在进行删除数据
    deleteItem = (idx)=>{
        let todo = [...this.state.todo];
        todo.splice(idx,1);
        this.setState({
            todo:todo
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todo))
        })
    }
    //正在进行向已经完成跳转
    delItem = (idx)=>{
        let todo = [...this.state.todo];
        todo.splice(idx,1);
        this.setState({
            todo:todo
        })
        this.comItem(idx);
    }
    comItem = (idx)=>{
        this.setState({
            com_todo:[...this.state.com_todo,this.state.todo[idx]]
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todo))
            localStorage.setItem('com_todo',JSON.stringify(this.state.com_todo))
        })
        
    }
    //已经完成的删除
    comDeleted = (idx)=>{
        let com_todo = [...this.state.com_todo];
        com_todo.splice(idx,1);
        this.setState({
            com_todo:com_todo
        },()=>{
            localStorage.setItem('com_todo',JSON.stringify(this.state.com_todo))
        })
    }
    //已经完成向正在进行转移
    comDelete = (idx)=>{
        let com_todo = [...this.state.com_todo];
        com_todo.splice(idx,1);
        this.setState({
            com_todo:com_todo
        })
        this.comChange(idx);
    }
    comChange = (idx)=>{
        //console.log(this.state.todo);
        this.setState({
            todo:[...this.state.todo,this.state.com_todo[idx]]
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todo))
            localStorage.setItem('com_todo',JSON.stringify(this.state.com_todo))
        })
    }
    //两者进行转换
    changeItem = (idx,check)=>{
        if(check == true){
            // console.log(idx);
            this.delItem(idx);
        }else if(check == false){
            //console.log(idx);
            this.comDelete(idx);
        }
    }
    render() {
        return (
            <div>
                <TodoInput add={this.addItem}/>
                <Todoing  todo={this.state.todo} del1 = {this.deleteItem} change={this.changeItem}/>
                <TodoCompete com_todo={this.state.com_todo} del={this.comDeleted}  change={this.changeItem}/>
            </div>
        )
    }
}
