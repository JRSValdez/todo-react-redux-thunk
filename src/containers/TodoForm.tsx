import React from 'react'
import { AddButton, TodoInput } from '../components'

const TodoForm = () => {
    return (
        <div className='d-flex flex-row justify-content-center'>
            <TodoInput />
            <AddButton />
        </div>
    )
}

export default TodoForm
