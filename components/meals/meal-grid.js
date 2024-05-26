import Link from 'next/link';
import Image from 'next/image';

import classes from './meals-grid.module.css';

import React from 'react';
import MealItem from "@/components/meals/meal-item";

function MealsGrid({meals}) {
    return (
        <ul className={classes.meals}>
            {meals.map((meal) => <li key={meal.id}>
                <MealItem {...meal}/>
            </li>)}
        </ul>
    );
}

export default MealsGrid;
