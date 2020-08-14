import * as actionType from '../actions/actionType';

const loggedReducer =(state=false, action)=>{
     switch(action.type){
         case actionType.SIGN_IN:
             return !state;
         default:
             return state;    
     }
}

export default loggedReducer;