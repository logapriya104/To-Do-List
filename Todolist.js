
import React, { useState} from "react";
import './index.css'


function Todolist(){
    const [task, setTask] =useState([]);
    const[newtask, setNewTask] = useState("");
    

    function handleInputchange(even){
setNewTask (even.target.value);
    }
    
    function addTask(){
     
        if(newtask.trim() === "") return;
       
      
setTask(prev => [...prev, {text: newtask.trim(), completed:false}]);
setNewTask("");
    }
    
    function deleteTask(index){
// const updatedTasks = task.filter((_, i) => i !==index);
setTask(prev => prev.filter((_, i) => i !== index));
    }

function toggleComplete(index){

    setTask(prev => 
  prev.map((item, i) => i === index ? { ...item, completed: !item.completed } : item
      )
    );
}

    function moveTakup(index){
if(index === 0 ) return; 

    setTask(prev => { const updated = [...prev];
      [updated[index], updated[index - 1]] =
        [updated[index - 1], updated[index]];
      return updated;
    });

    }

    function moveTaskdown(index){

 setTask(prev => {
      if (index === prev.length - 1) return prev;
      const updated = [...prev];
      [updated[index], updated[index + 1]] =
        [updated[index + 1], updated[index]];
      return updated;
    });
}



return( <div className="to-do-list">
 
    <h1 >To-Do-List</h1>

<div >
    <input type="text"  placeholder="enter a task.." value={newtask} onChange={handleInputchange} />

    <button className="add-button" onClick={addTask}
    >Add</button>
</div>


<ol>
    {task.map ((item, index) => (
    <li key={index}>


            <button
              className={`check-btn ${item.completed ? "checked" : ""}`}
              onClick={() => toggleComplete(index)}
            >
              {item.completed ? "✓" : ""}
            </button>


            

            <span className={`text ${item.completed ? "completed" : ""}`}>
              {item.text}
            </span>
   
   
   <button className="delete-button" onClick={ () => deleteTask(index)}>
    delete
</button>

   <button className="move-button" onClick={ () =>moveTakup(index)}>
    ⬆️
</button>

   <button className="move-button" onClick={ () =>moveTaskdown(index)}>
     ⬇️
</button>

    </li>
     ))}
</ol>
    </div>
);
}

export default  Todolist;

