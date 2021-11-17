import React from 'react'
import Task from './Task'

function Tasks({ tasks }) {
    return (
        <div className="row">
            <div className="col-12 text-right">
                <button className="button primary">new</button>
            </div>
            {tasks.map((task) => {
                return (
                    <Task task={task} key={task.id}/>
                )
            })}

        </div>
    )
}

export default Tasks
