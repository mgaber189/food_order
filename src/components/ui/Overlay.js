import React from "react";
import style from './Overlay.module.css'
import ReactDOM from 'react-dom';
const portalelement=document.getElementById("overlay")
const Dropdown=(props)=>{
    return <div onClick={props.onclose} className={style.overlay}/>
}
const Content=(props)=>{
    return <div className={style.children}>{props.children}</div>
}
const Overlay =(props)=>{
    return <>
        {ReactDOM.createPortal(<Dropdown onclose={props.overlay}/>,portalelement)}
        {ReactDOM.createPortal(<Content>{props.children}</Content>,portalelement)}
    </>

}
export default Overlay;