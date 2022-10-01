export const List = ()=>{
    const tasks = [
        {task: 'React',time: '02:00:00'},

    ]
    return (
        <aside>
            <h2>Estudos do Dia</h2>
            <ul>
                {tasks.map((item)=>(
                    <li>
                        <h3>{item.task}</h3>
                        <span>{item.time}</span>
                    </li>
                ))}
                
            </ul>
        </aside>
    )
}