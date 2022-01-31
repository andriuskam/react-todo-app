import React, { useState } from "react";
import { Form } from 'react-bootstrap';

export default function ToDoForm({ addToDo }) {

    const [value, setValue] = useState('');

    console.log(value);

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addToDo(value);
        setValue('');
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Control
                type="text"
                placeholder="Enter new task..."
                value={ value }
                onChange={ (e) => setValue(e.target.value) }
                className="my-3"
            />
        </Form>
    )
}