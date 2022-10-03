import { ITasks } from '../../../types/tasks'
import style from './Item.module.scss'

interface Props extends ITasks{
    selectTask: (taskSelect:ITasks)=>void
}
export const Item = (
    {
        task, 
        time, 
        select, 
        completed, 
        id, 
        selectTask
    }:Props)=>{
    return (
        <li 
            className={`${style.item} ${select? style.itemSelect : ""}`} 
            onClick={()=>selectTask(    
                {
                    task,
                    time,
                    select,
                    completed,
                    id
                }
        )}
        >
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}