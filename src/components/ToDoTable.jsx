import React from "react";

export default function ToDoTable({ task, index }) {

    console.log( task, index );
    
    return (
        <tr>
            <td>{ index + 1 }</td>
            <td>{ task.text }</td>
            <td>{ task.isCompleted ? "Done" : "Stil in Progress" }</td>
        </tr>
    )
}