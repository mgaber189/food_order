import React from "react";
import style from "./Cartitem.module.css";
import Button from "../ui/Button";
const Cartitem=(props)=>{
    return <li className={style.everyorder}>
    <div className={style.left}>
        <h4>{props.item.name}</h4>
        <div className={style.amount}>
            <div>${props.item.price}</div>
            <span>×{props.item.amount}</span>
        </div>
    </div>
    <div className={style.right}>
        <Button onClick={props.onRemove} style={style.btn}>-</Button>
        <Button onClick={props.onAdd} style={style.btn}>+</Button>
    </div>
</li>
}
export default Cartitem;