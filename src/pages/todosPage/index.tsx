import React, {useState, useEffect} from 'react'
import { TodoForm } from '../../components/todoForm'
import {TodoList} from '../../components/todoList'

import { ITodo } from '../../interfaces'

export const TodosPage: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([])


    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title,
            id: Date.now(),
            completed: false
        }

        setTodos( prev => [newTodo, ...prev])
    }

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(storage)
    }, [])

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const toggleHandler = (id:number) => {
        setTodos(prev => prev.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            } 
            return todo
        }))
    }

    const removeHandler = (id:number) => {
        const modal = confirm(`Do you want delete element with id: ${id} ?`)

        if(modal) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    }


    return <>
            <TodoForm addHandler={addHandler} />
            <TodoList todos={todos} toggleHandler={toggleHandler} removeHandler={removeHandler}/>
    </>
}