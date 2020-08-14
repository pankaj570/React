export const GET_POSTS = 'GET_POSTS';
export const SHOW_SINGLE_POST = 'SHOW_SINGLE_POST';

export const getPosts=(posts)=>{
    return{
        type:GET_POSTS,
        payload:posts
    };
}

export const showSinglePost=()=>{
        return{
            type:SHOW_SINGLE_POST
        };  
    }   

