
import * as actions from '../actions/postsAction';


 const initialState={
     posts:[
     ]
 }

 const postsReducer=(state=initialState, action)=>{
    
    switch(action.type){
        case actions.GET_POSTS:{
            console.log(actions.GET_POSTS)
            return{
                ...state,
            posts:action.payload
                
            };
        }
        case actions.SHOW_SINGLE_POST:{
           return {
               ...state
           }; 
        }
        default:{
            return {
                ...state
            };
        }
           
    }
}

export default postsReducer;