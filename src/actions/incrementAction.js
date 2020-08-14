import * as actionType from './actionType';

export const increment = (number)=>{
    return {
        type : actionType.INCREMENT,
        payload: number
    };
  };
  
  export const decrement = (number)=>{
    return {
        type : actionType.DECREMENT,
        payload: number
    };
  };

  export const isLogged =()=>{
    return {
      type: actionType.SIGN_IN
    }
  };