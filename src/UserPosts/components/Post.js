
import React from 'react';
import { Link } from 'react-router-dom';
const Post=(props)=>{
   return(
        <article className='post'> 
           <h3>Hi i have my user id : {props.post.userId}</h3>
           <h3>{props.post.title}</h3>
           <p>{props.post.body}</p>
           <Link to={`/SinglePost/${props.post.id}`} className="button">View Post</Link>
        </article>
    );
}
export default Post;