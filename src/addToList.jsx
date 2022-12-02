import { useState, useRef } from 'react'
import './App.css'

 function App(){
    const [toDoList, setList] = useState([])
    const [currentList, setCurrentList] = useState("")
    const inputRef = useRef();

  
    console.log(toDoList)

    return(
    <div className = "App">
        
        <h1>To Do List</h1>
        <input type="text" ref={inputRef} />
       
     <button onClick={() => 
        { 
            setCurrentList((currentList) => currentList = inputRef.current.value)
            
            setList((prevToDoList) => {
                const thisList = {
                    listName: inputRef.current.value,
                    listItems: [],
                }
                return [...prevToDoList, thisList]
          })
        } 
        }>Add list</button>
        

        <button onClick={() => 
            setList(toDoList.map((value, index) => { 
            if(currentList == value.listName) {
             value.listItems = [...value.listItems, inputRef.current.value]
            }
            return value
        }))
        }>Add to do</button>

        <div>
            <h2> Current List: {currentList}</h2>
        {
            toDoList.map( (value, index) =>{
                return <ul> 
                    
                    <button onClick= {() => {
                    setCurrentList(function (currentList) {
                        return currentList = value.listName
                    })   
                 }}> {value.listName} </button>

                 {value.listItems.map(function (value, index) {
                    return <li>{value}</li>
                 })
                 }
            </ul>
            })
        }
 
        </div>
      
    </div>
    )
}

export default App;