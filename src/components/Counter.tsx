import { useState } from "react";
import classes from './Counter.module.scss';

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    const changeIncrementHandle = () => {
        setCounter(counter + 1);
    }

    const changeDecrementHandle = () => {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h2 className={classes.green}>{counter}</h2>
            <button onClick={changeIncrementHandle}>increment</button>
            <button onClick={changeDecrementHandle}>decrement</button>
        </div>
    )
}