import React from "react";
import Card from "../ui/Card";
import style from './Mealscard.module.css';
import Everymeal from "./Everymeal";
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
const Mealscard = (props)=>{
    return <Card style={style.card}>
        <ul className={style.ul}>
            {DUMMY_MEALS.map(meal=>
                <Everymeal key={meal.id} meal={meal}/>
            )}
        </ul>
    </Card>
}
export default Mealscard;