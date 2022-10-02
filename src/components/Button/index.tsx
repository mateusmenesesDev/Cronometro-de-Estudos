import React from "react"
import style from'./Button.module.scss'

interface Props{
    children:React.ReactNode,
    type?: 'button' | 'submit' | 'reset' | undefined
}
export const Button = ({type, children}:Props)=>{
    return (
        <button className={style.button} type={type}>
            {children}
        </button>
    )
}