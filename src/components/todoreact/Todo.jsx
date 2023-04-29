import React, { useState, useEffect } from 'react'
import "./style.css";

// get the localStorage data back
const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist")

  if (lists) {
    return JSON.parse(lists)
  } else {
    return[]
  }
}
export const Todo = () => {
  const [inputdata,setInputData] = useState("")
  const [items, setItems] = useState(getLocalData())
  // add the items function
  const addItems = () => {
    if(!inputdata) {
      alert("plz fill the data")
    }else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
      }
      setItems([...items, myNewInputData])
      setInputData("")
    }
  }
  // how to delete items sections
    const deleteItem = (index) => {
      const updatedItems = items.filter((curElem) => {
       return curElem.id !== index
      })
      setItems(updatedItems)
    }
    // remove all the elements
    const removeAll = () => {
      setItems([])
    }
    // adding localstorage
    useEffect(() => {
      localStorage.setItem("mytodolist", JSON.stringify(items))
    }, [items])
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
        value={inputdata}
        onChange={(event) => setInputData(event.target.value)}
        />
        <i className="fa fa-plus add-btn" onClick={addItems}></i>
       </div>
       {/*show our items*/}
       <div className="showItems">
        {items.map((curElem) => {
        return (
          <div className="eachItem" key={curElem.id}>
          <h3>{curElem.name}</h3>
          <div className="todo-btn">
            <i className="far fa-edit add-btn"></i>
            <i className="far fa-trash-alt add-btn" onClick={() => deleteItem(curElem.id)}></i>
          </div>
        </div>
        )
        })}
      
       </div>
       {/*rmove all button*/}
       <div className="showItems">
        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
          <span>CHECK LIST</span>
        </button>
       </div>
    </div>
</div>
    </div>
  )
}
