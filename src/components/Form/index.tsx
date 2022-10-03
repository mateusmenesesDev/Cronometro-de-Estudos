import React, { useState } from 'react'
import { ITasks } from '../../types/tasks'
import { Button } from '../Button'
import style from './Form.module.scss'
import {v4 as uuidv4} from 'uuid'
 
export const Form = ({setTasks}:{setTasks:React.Dispatch<React.SetStateAction<ITasks[]>>})=>{
    const[task, setTask] = useState('')
    const[time, setTime] = useState('')
    const addTask = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        setTasks(oldTasks => 
            [
                ...oldTasks,
                {
                    task:task, 
                    time:time,
                    select: false,
                    completed: false,
                    id:uuidv4()
                }
            ]
        )
        setTask('')
        setTime('')
    }
    return (
        <form className={style.newTask} onSubmit={addTask}> 
            <div className={style.inputContainer}>
                <label htmlFor="task"></label>
                <input 
                    type='text'
                    name='task'
                    id='task'
                    placeholder="O que você deseja estudar"
                    required
                    value={task}
                    onChange={(event)=>setTask(event.target.value)}
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="task"></label>
                <input 
                    type='time'
                    step='1'
                    name='time'
                    id='time'
                    min='00:01:00'
                    max='05:00:00'
                    required
                    value={time}
                    onChange={(event)=>setTime(event.target.value)}
                />
            </div>
            <Button type='submit'>Adicionar Estudo</Button>
        </form>
    )
}