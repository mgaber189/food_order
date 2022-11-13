import React from "react";
import style from './Input.module.css'
const Input =React.forwardRef((props,ref)=>{
    return <>
        <label className={`${style.label}  ${props.labelstyle}`} htmlFor={props.id}>{props.label}</label>
        <input value={props.value} ref={ref} min={props.min} max={props.max} className={`${style.input}  ${props.inputstyle}`} id={props} type={props.type||"text"} onChange={props.onChange}></input>
    </>
});
export default Input;