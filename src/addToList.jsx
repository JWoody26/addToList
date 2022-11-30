import { useState, useRef } from 'react'
import './App.css'

 function App(){
    const [toDoList, setToDoList] = useState([])
    const inputRef = useRef("");

    return(
    <div className = "App">
        <input type="text" ref={inputRef} />
        <button onClick={() => setToDoList([...toDoList, inputRef.current.value])}>Add to do</button>

            <ul>{
            toDoList.map(function (value, index){
                return <li>{value}</li>
            })
            }
            </ul>
    </div>
    )
}

export default App;