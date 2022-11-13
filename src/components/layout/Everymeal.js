import React, { useContext, useRef } from "react";
import style from "./Everymeal.module.css"
import Input from '../ui/Input';
import Button from "../ui/Button";
import Cartcontext from "../../context/Cartcontext";
const Everymeal=(props)=>{
    const inpref=useRef();
    
    const ctx = useContext(Cartcontext);
    const addmealtoctx=(amount)=>{
        const inval=inpref.current.value;
        const inpconvert=+inval;
        amount=inpconvert;
        if(amount==""){
            amount=1;
        }
        ctx.additem({
            id:props.meal.id,
            name:props.meal.name,
            price:props.meal.price,
            amount:amount,
        });
    }
    return<>
        <li key={props.meal.id} className={style.info}>
            <div >
                <h4>{props.meal.name}</h4>
                <p>{props.meal.description}</p>
                <p>${props.meal.price}</p>
            </div>
            <form className={style.form}>
                <Input ref={inpref}  min="1" max="5" label="Amount" id="n1" type="number" onChange={onchange}/>
                <Button onClick={addmealtoctx} style={style.btn}>+Add</Button>
            </form>
        </li>
    </>
}
export default Everymeal;