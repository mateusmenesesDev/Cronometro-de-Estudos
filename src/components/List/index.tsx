import { Item } from './Item'
import style from './List.module.scss'


export const List = ()=>{
    const tasks = [
        {task: 'React',time: '02:00:00'},

    ]
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