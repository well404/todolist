import { useState, useRef, useEffect } from 'react'

import Task from './task'

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


import { TodoContainer } from "./style"

const Todo = () => {

    const [tasks, setTasks] = useState([])
    const task = useRef()

    useEffect(() => {
        const localTasks = JSON.parse(localStorage.getItem('tasks'))

        if (!!localTasks?.length) setTasks(tasks => localTasks)
    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = (event) => {

        event.preventDefault()

        let taskValue = task.current.value

        if (!taskValue) return;

        let newTask = {
            id: Math.floor(Math.random() * 9999),
            value: taskValue,
            completed: false
        }

        setTasks(tasks => [newTask, ...tasks])

        task.current.value = ''
        task.current.focus()
    }

    const completedTask = (taskId) => {
        setTasks(tasks => {
            const filtered = tasks.map((task) => {
                if (taskId === task.id) {
                    return { ...task, completed: !task.completed }
                }

                return task
            })

            return filtered
        })
    }

    const removeTask = (taskId) => {
        setTasks(tasks => tasks.filter(({ id }) => taskId !== id))
    }

    const clearTasks = () => {
        setTasks(tasks => [])
    }

    return (
        <TodoContainer>
            <div className="todo">
                <form onSubmit={addTask}>
                    <input ref={task} type="text" id="Task" placeholder="Adicionar Tarefa" />
                    <Button variant="contained" type="submit">
                        <AddIcon />
                    </Button>
                </form>

                <ul>
                    {
                        tasks.map((task) => (
                            <Task
                                key={task.id}
                                task={task}
                                completedChange={completedTask}
                                removeTask={removeTask}
                            />
                        ))
                    }
                </ul>

                <Button variant="contained" onClick={clearTasks} >
                    apagar tarefas
                </Button>
            </div>
        </TodoContainer>
    )
}

export default Todo