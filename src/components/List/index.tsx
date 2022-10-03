import { useState } from 'react'
import { ITasks } from '../../types/tasks'
import { Item } from './Item'
import style from './List.module.scss'

interface Props{
    tasks:ITasks[],
    selectTask: (taskSelect:ITasks)=>void
}
export const List = ({tasks, selectTask}:Props)=>{
    return (
        <aside className={style.taskList}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tasks.map((item)=>(
                    <Item
                        selectTask = {selectTask}
                        key={item.id}
                        {...item}
                    />
                ))}
                
            </ul>
        </aside>
    )
}