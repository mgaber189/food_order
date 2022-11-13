import { useReducer } from "react";
import Cartcontext from "./Cartcontext";
const defaultcart={
    item:[],
    totalamount:0,
    totalprice:0
}
const reducer=(state,action)=>{
    if(action.type==='add'){
        const isexist=state.item.findIndex((itm)=>itm.id===action.item.id);
        const existingitem=state.item[isexist];
        let updateditems = state.item.concat(action.item);
        const updatedtotalamount = state.totalamount+action.item.amount;
        const updatedtotalprice = state.totalprice+action.item.amount*action.item.price;
        if(existingitem){
            const updateditem={
                ...existingitem,
                amount:existingitem.amount+action.item.amount
            }
            updateditems=[...state.item];
            updateditems[isexist]=updateditem;
        }else{
            updateditems = state.item.concat(action.item);
        }
        return{
            item:updateditems,
            totalamount:updatedtotalamount,
            totalprice:updatedtotalprice
        }
    }
    if(action.type==='del'){
        const isexist=state.item.findIndex((itm)=>itm.id===action.id);
        const existingitem=state.item[isexist];
        let updateditems; 
        const updatedtotalamount = state.totalamount - 1;
        const updatedtotalprice = state.totalprice - existingitem.price;      
        if(existingitem){
            if(existingitem.amount===1){
                updateditems=state.item.filter(item=>item.id !== action.id)
            }else{
                const updateditem= {...existingitem,amount:existingitem.amount - 1}
                updateditems=[...state.item];
                updateditems[isexist]=updateditem;
            }
        }
        return{
            item:updateditems,
            totalamount:updatedtotalamount,
            totalprice:updatedtotalprice
        }
    }
    return defaultcart
}
const Cartprovider =(props)=>{
    const [cart,dispatchcart]=useReducer(reducer,defaultcart);
    const addhandler=(item)=>{
        dispatchcart({type:"add",item:item});
    }
    const delhandler=(id)=>{
        dispatchcart({type:"del",id:id})

    }
    const cartcontext={
        items:cart.item,
        totalamount:cart.totalamount,
        totalprice:cart.totalprice,
        additem:addhandler,
        removeitem:delhandler
    }
    return <Cartcontext.Provider value={cartcontext}>
        {props.children}
    </Cartcontext.Provider>
}
export default Cartprovider;