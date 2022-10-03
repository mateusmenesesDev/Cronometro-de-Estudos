import { useEffect, useState } from "react"
import { ITasks } from "../../types/tasks"
import { Button } from "../Button"
import { timeToSeconds } from "../common/utils/time"
import { Clock } from "./Clock"
import style from './Timer.module.scss'

interface Props{
    select:ITasks | undefined
    finishTask: ()=> void
}
export const Timer = ({select, finishTask}:Props)=>{

    const [time, setTime] = useState<number>()
    
    useEffect(()=>{
        if(select?.time){
            // console.log(select?.time)
            // console.log(time)
            setTime(timeToSeconds(select.time))
            // console.log(time)
        }
    }, [select])

    function startTimer(count:number = 0){
        console.log(count)
        setTimeout(()=>{
            if(count>0){
                setTime(count-1)
                return startTimer(count-1)
            }
            finishTask()
        }, 1000)
    }

    return (
        <div className={style.timer}>
            <p className={style.title}> Escolha um estudo e inicie o cronomêtro</p>
            <div className={style.clockWrapper}>
                <Clock time={time}/>
            </div>
            <Button startTimer = {()=> startTimer(time)}>Iniciar!</Button>
        </div>
        
    )
}