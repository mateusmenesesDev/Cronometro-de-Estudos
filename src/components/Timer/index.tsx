import { Button } from "../Button"
import { Clock } from "./Clock"
import style from './Timer.module.scss'

export const Timer = ()=>{
    return (
        <div className={style.timer}>
            <p className={style.title}> Escolha um estudo e inicie o cronomêtro</p>
            <div className={style.clockWrapper}>
                <Clock/>
            </div>
            <Button>Iniciar!</Button>
        </div>
        
    )
}