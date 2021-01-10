import { useState } from "react"
import React from 'react'
import './todoList.less'
import { ITodo } from "../../interfaces"

type TodoListProps = {
    todos: ITodo[],
    toggleHandler(id:number):void,
    removeHandler(id:number):void
}

export const TodoList: React.FC<TodoListProps> = ({todos, toggleHandler, removeHandler}) => {



    const toggle = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        removeHandler(id)
    }

    if(todos.length === 0) {
        return <p className="center">Todos not found</p>
    }

    return (
        <ul>
            {
                todos.map(todo => {

                    const classes = ['todo']

                    if(todo.completed) classes.push('completed')

                    return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input type="checkbox" checked={todo.completed} onChange={()=>toggleHandler(todo.id)}/>
                            <span >{todo.title}</span>
                            <i className="material-icons red-text" onClick={event => toggle(event, todo.id)}>delete</i>
                        </label>
                    </li>
                    )
                })
            }
        </ul>
    )
}