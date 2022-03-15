import React from "react";
import todoData from './TodoData'
import TodoItem from './TodoItem'
class StateTodoApp extends React.Component{

constructor()
{
    super()
    this.state = {
        todos : todoData
    }
    this.handleChange = this.handleChange.bind(this)
}



handleChange(id){

this.setState(prvState =>{
console.log('prvState',prvState);
  const updatedTodos = prvState.todos.map(todo => {
    if(todo.id === id)
    {
      console.log(todo.id,id);
      todo.completed = !todo.completed
      console.log('todo.completed',todo );
    }
  
    return todo
  });
  
  console.log(updatedTodos);

  return {
    todos : updatedTodos
  }
})

  //console.log("changed",id); 

}

render(){

    const todoItem = this.state.todos.map(item => <TodoItem key = {item.id} item = {item} handleChange ={this.handleChange} />)

    return (
      <div>
        {todoItem}
        </div>
      
    )
}

}

//module.export = StateTodoApp

export default StateTodoApp