import React, { useContext} from "react";
import style from "./Order.module.css";
import Card from "./Card";
import Cartcontext from "../../context/Cartcontext";
import Button from "./Button";
import Cartitem from "../layout/Cartitem";
const Order=(props)=>{
    const ctx = useContext(Cartcontext);
    const orderbtnshow = ctx.items.length>0;
    const addhandler=(item)=>{
        ctx.additem({...item,amount:1});
    }
    const removehandler=(id)=>{
        ctx.removeitem(id);
    }
    return <Card  style={style.card}>
        <ul className={style.container}>
            {ctx.items.map(item=><Cartitem key={item.id} item={item} onAdd={addhandler.bind(null,item)} onRemove={removehandler.bind(null,item.id)}/>)}
        </ul>
        <div className={style.total}>
            <h2>Total Amount</h2>
            <h4>${ctx.totalprice.toFixed(2)}</h4>
        </div>
        <div className={style.confirm}>
            <Button onClick={props.onclose} style={style.btn}>Close</Button>
            {orderbtnshow && <Button style={style.btn}>Order</Button>}
        </div>
    </Card>
}
export default Order;