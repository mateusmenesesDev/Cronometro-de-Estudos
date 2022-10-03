import React from "react"
import style from'./Button.module.scss'

interface Props{
    children:React.ReactNode,
    type?: 'button' | 'submit' | 'reset' | undefined
    startTimer?: ()=>void
}
export const Button = ({type, startTimer, children}:Props)=>{
    return (
        <button onClick={startTimer} className={style.button} type={type}>
            {children}
        </button>
    )
}