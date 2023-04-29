import React from 'react'
import "./style.css";
export const Todo = () => {
  return (
    <div>
      <div className="main-div">
    <div className="child-div">
       <figure>
        <img src="./images/todo.svg" alt="todologo" />
        <figcaption>Add Your List Here ✌</figcaption>
       </figure>
       <div className="addItems">
        {console.log("todo")}
        <input
        type="text"
        placeholder="✍ Add Item"
        className="form-control"
        />
       </div>
    </div>
</div>
    </div>
  )
}
