import React,{useState} from "react";

function Guildjoin() { 

    const [task, setTask ] = useState(["eat breakfast","take shower", "take sleep"]);

    const[newTask, setNewTask]= useState("");


function handleInputChange(event){

    setNewTask(event.target.value);
}
function addTask(event){
if(newTask.trim () !== " "); 
{
   setTask (t=> [...t, newTask]);
setNewTask("")

}}
function removeTask(index){
const upDateTask = task.filter(( _, i) =>  i)
setTask(upDateTask)


}
function moveTaskuf(index){


}
function moveTaskDown(){


}

return (
        <div className="to-do-list" >
        <h1>To add something</h1>
        <input
        type="text" placeholder="Enter something" value={newTask} onChange={handleInputChange} />
        <button className="add-button"
        onClick={addTask}>Add here ,,,</button>
        <ol>
           
            { task.map((task, index)=><li key={index}>
         <span className="text">{task}</span>
          


<button className="delete-button" onClick={() => removeTask(index)}> Remove</button>
</li>
)}
        </ol>    
        </div>
    );
} export default Guildjoin;