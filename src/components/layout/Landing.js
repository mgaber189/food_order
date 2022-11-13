import React from "react";
import style from './Landing.module.css';
import image from '../../assets/meals.jpg';
import Card from '../ui/Card';
const Landing = (props)=>{
    return <>
        <div className={style.landing}>
            <img src={image} alt="meals phot" width="100%" height="100%"/> 
            <Card style={style.card}>
                <h2>Delicious Food, Delivered To You</h2>
                <p>choose your favorite meal from our broad selection of available meals and enjoy a delicious launch or dinner at home.</p>
                <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
            </Card>
        </div>
    </>
}
export default Landing;
