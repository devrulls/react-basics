import React, {useReducer} from 'react';
import Button from '../elements/Button';

//accion 
// {tipo: 'INCREMENTAR'}
const counterInitial = {counter: 0};
const reducer = (state, action)=> {
    switch (action.tipo) {
        case 'INCREASE':
            return {counter: state.counter + 1}
        case 'DECREASE':
            return {counter: state.counter - 1}
        case 'RESET':
            return {counter: state.counter = 0}
        default:
            return state;
    }

};


const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, counterInitial);

    return ( 
        <div>
        <h1>Counter Functional:{state.counter}</h1>
        <Button black marginRight onClick={()=> dispatch({tipo: 'INCREASE'})}>Increase</Button>
        <Button black marginRight onClick={()=> dispatch({tipo: 'DECREASE'})}>Decrease</Button>
        <Button black marginRight onClick={()=> dispatch({tipo: 'RESET'})}>Reset</Button>
      </div>
    );
}
 
export default UseReducer;