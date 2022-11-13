import React, { useContext } from "react";
import style from './Header.module.css';
import Button from '../ui/Button';
import Cartcontext from "../../context/Cartcontext";
const Header=(props)=>{
    const cartctx=useContext(Cartcontext)
    return <>
        <div className={style.nav}>
            <div className={style.logo}>
                <h2>ReactMeals</h2>
            </div>
            <div>
                <Button onClick={props.overlay} style={style.orderbtn}>your chart 
                    <span className={style.ordernum}>{cartctx.totalamount}</span>
                </Button>
            </div>
        </div>
    </>
}
export default Header;