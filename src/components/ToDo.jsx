import React, { useState } from "react";
import { Container, Navbar, Table } from 'react-bootstrap';
import ToDoForm from "./ToDoForm";
import ToDoTable from "./ToDoTable";

export default function ToDo(){
    const [tasks, setTask] = useState(
        [
            {
                id: 1,
                text: "Clean your room",
                isComplete: false
            },
            {
                id: 2,
                text: "Do your homework",
                isComplete: true
            },
            {
                id: 3,
                text: "To go to cinema",
                isComplete: false
            }
        ]
    )

    function addToDo(text) {
        const newTodo = [...tasks, { text, isCompleted: false }];
        setTask(newTodo);
    }
    
    return (

        <>

            <Navbar expand="lg" variant="dark" bg="dark" className="my-3">
                <Container>
                    <Navbar.Brand href="#">To - Do List</Navbar.Brand>
                </Container>
            </Navbar>

            <ToDoForm addToDo={ addToDo } />

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((task, index) => (
                            <ToDoTable key={ index } index={ index } task={ task }/>
                        ))
                    }
                </tbody>
            </Table>
        </>
        
    )
}