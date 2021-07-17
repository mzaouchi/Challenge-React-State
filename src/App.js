import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ToDo : [
        {task : 'eat', id : 0,done : false},
        {task : 'drink', id : 1,done : false},
        {task : 'sleep', id : 2,done : false}
      ],
      text : '',
      edittext : ''
    }
  }

  handleDelete=(a)=>{
    this.setState({
      ToDo : this.state.ToDo.filter((el,i)=> i !== a )
    })
  }

  handleCheck=(a)=>{
    this.setState({
      ToDo : this.state.ToDo.map((el,i)=> a === i ? {...el,done : !el.done} : el )
    })
  }
  hanldleAdd=()=>{
    this.setState({
      ToDo : [...this.state.ToDo,{task : this.state.text,id : this.state.ToDo.length ,done : false}]
    })
  }

  handleEdit=(a)=>{
    this.setState({
      ToDo : this.state.ToDo.map((el,i)=> i=== a ? {...el,task : this.state.edittext}:el)
    })
  }
  render(){
    return(
      <div>
        <input type="text" value={this.state.text} onChange={(e)=>this.setState({text : e.target.value})}></input>
        <button onClick={()=>this.hanldleAdd()}>Add</button>
        <h2>Edit Text</h2>
        <input type="text" value={this.state.edittext} onChange={(e)=>this.setState({edittext : e.target.value})}></input>
        {
          this.state.ToDo.map((el,i)=>
            <div>
              <h1 style={{textDecoration : el.done && "line-through"}}>{el.task}</h1>
              <button onClick={()=>this.handleDelete(i)}>Delete</button>
              <button onClick={()=>this.handleCheck(i)} style={{color : el.done ? "green" : "red"}}>Check</button>
              <button onClick={()=>this.handleEdit(i)} >Edit</button>
            </div>
          )
        }
      </div>
    )
  }
}

export default App;
