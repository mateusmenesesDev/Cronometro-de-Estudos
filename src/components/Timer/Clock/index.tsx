import style from './Clock.module.scss'

export const Clock = ()=>{
    return(
        <>
            <span className={style.clockNumber}>0</span>
            <span className={style.clockNumber}>0</span>
            <span className={style.clockDiv}>:</span>
            <span className={style.clockNumber}>0</span>
            <span className={style.clockNumber}>0</span>
        </>
    )
}