import style from './Clock.module.scss'

interface Props{
    time: number | undefined
}
export const Clock = ({time = 0}:Props)=>{
    const minute = Math.floor(time/60)
    const second = time % 60
    const [minuteTen, minuteUnity] = String(minute).padStart(2, '0')
    const [secondTen, secondUnity] = String(second).padStart(2, '0')
    return(
        <>
            <span className={style.clockNumber}>{minuteTen}</span>
            <span className={style.clockNumber}>{minuteUnity}</span>
            <span className={style.clockDiv}>:</span>
            <span className={style.clockNumber}>{secondTen}</span>
            <span className={style.clockNumber}>{secondUnity}</span>
        </>
    )
}