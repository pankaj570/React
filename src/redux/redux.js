
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, isLogged, decrement} from '../actions/incrementAction';
function ReduxExample(){
    const dispatch = useDispatch();
    const counter = useSelector(state=>state.counter);
    const isLogin = useSelector(state=>state.isLogged);
        return (
            <div>
                <h1>Counter : {counter}</h1>
                {isLogin?<h1>we are able logged</h1>:""}
                
                <button onClick={()=>dispatch(increment(10))}>+</button>
                <button onClick={()=>dispatch(decrement(10))}>-</button>
                <button onClick={()=>dispatch(isLogged())}>Logged</button>
            </div>

        );
}

export default ReduxExample;