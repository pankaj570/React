import * as actionType from '../actions/actionType';

const counterReducer = (state=0, action)=>{
 switch(action.type){
     case actionType.INCREMENT :{
         return state+action.payload;
     }
     case actionType.DECREMENT :{
         return state-action.payload;
     }
     default:{
         return state;
     }
 }
}

export default counterReducer;