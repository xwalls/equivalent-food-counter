import React, { useEffect, useState } from 'react'
import FOOD_TYPES from './data/foodItems';
import Row from './Row'


const printBody = (foodItems, increment, decrement) => {
    const rows = foodItems.map(({ id, name, actual, meta }) =>
        <Row key={ id } id={ id } type={ name } actual={ actual } meta={ meta } increment={ increment } decrement={ decrement }/>
    );
    return (
        <tbody>{ rows }</tbody>
    );
}

const init = () => {
    const initialValue = JSON.parse(localStorage.getItem('foodItems'));
    if (initialValue?.length > 0){
        return initialValue;
    } else {
        return FOOD_TYPES;
    }
}

export default function Table() {

    const [foodItems, setFoodItems] = useState(init())

	useEffect(() => {
		const foodItems = JSON.parse(localStorage.getItem('foodItems'));

        if (foodItems){
            setFoodItems(foodItems);
        }
	}, []);

    useEffect(() => {
		localStorage.setItem('foodItems', JSON.stringify(foodItems));
	}, [foodItems]);

    const increment = (id) => {
        let newFoodItems = JSON.parse(localStorage.getItem('foodItems'));
        newFoodItems[id].actual = newFoodItems[id].actual+1;
        setFoodItems(newFoodItems);
    }
    const decrement = (id) => {
        let newFoodItems = JSON.parse(localStorage.getItem('foodItems'));
        newFoodItems[id].actual = newFoodItems[id].actual-1;
        setFoodItems(newFoodItems);
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Tipo de Alimento</th>
                        <th>Actual</th>
                        <th>Meta</th>
                    </tr>
                </thead>
                { printBody(foodItems, increment, decrement) }
            </table>
        </>
    )
}