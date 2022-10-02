import { useState } from 'react'
import { ITasks } from '../../types/tasks'
import { Item } from './Item'
import style from './List.module.scss'

export const List = ({tasks}:{tasks:ITasks[]})=>{
    return (
        <aside className={style.taskList}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tasks.map((item)=>(
                    <Item {...item}/>
                ))}
                
            </ul>
        </aside>
    )
}