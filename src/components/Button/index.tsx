import React from "react"
import style from'./Button.module.scss'

export const Button = ({children}:{children:React.ReactNode})=>{
    return (
        <button className={style.button}>
            {children}
        </button>
    )
}