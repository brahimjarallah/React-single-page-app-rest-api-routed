import Task from "./Task"

import React from "react"

const Tasks = ({ tasks, onDelete, onToggle}) => {
  return (
    <>
        {tasks.map((task) => {
          {/* return  <p key={task.id}>{task.text}</p> */}
        console.log(task.id);
          {/* return <Task key={task.id} task={task.text } taskday={task.day} /> */}
          return <Task key={task.id} task={task } onDelete={onDelete} onToggle={onToggle} />
        })}
    </>

    // <>
    //   {tasks.map((task) => {
    //     <Task key={task.id} task={task.text} />
    //   })}
    // </>
  )
}

export default Tasks
