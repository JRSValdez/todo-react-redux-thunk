import React from 'react'
import { Header } from '../components';
import { TodoForm, TodoList } from '../containers'

const Home = () => {
    return (
        <div className='container'>
            <Header />
            <TodoForm />
            <TodoList />
        </div>
    )
}

export default Home
