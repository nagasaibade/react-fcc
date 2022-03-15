import React from "react";

function TodoItem(props)
{
    return(
      <div className="todo-item">
          <input
          type="checkbox"
       //   {...console.log(props.item.completed)}
          checked ={ props.item.completed }
          onChange={() => props.handleChange(props.item.id)}

          />
          <p>{ props.item.task }</p>
      </div>
    )
}

//module.export = TodoItem
export default TodoItem