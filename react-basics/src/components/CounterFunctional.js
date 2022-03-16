import React, { useState, useEffect } from "react";
// import styles from './counterFunctional.module.css'
import Button from "../elements/Button";


const CounterF = ({quantityIncrease, quantityDecrease}) => {
  const [counter, changeCounter] = useState(0);

  // useEffect(() =>{
  //   console.log('render component');
  // });
  // useEffect(() =>{
  //   console.log('first render');
  // },[]);

  // useEffect(() =>{
  //   console.log('Counter status has changed');
  // },[counter]);

  useEffect(() =>{
    //code effect
    
    return(()=>{
      console.log('Bye Bye');
    });
  },[]);

  const increaseCounter = (quantityIncrease) => changeCounter(counter + quantityIncrease);
  const DecreaseCounter = (quantityDecrease) => changeCounter(counter - quantityDecrease);




  return (
    <div>
      <h1>Counter Functional:{counter}</h1>
      {/* <button className={styles.button} onClick={() => increaseCounter(quantityIncrease)}>Increase</button>
      <button className={styles.button} onClick={() => DecreaseCounter(quantityDecrease)}>Decrease</button> */}
      <Button black marginRight onClick={() => increaseCounter(quantityIncrease)}>Increase</Button>
      <Button black marginRight onClick={() => DecreaseCounter(quantityDecrease)}>Decrease</Button>
    </div>
  );
};

export default CounterF;