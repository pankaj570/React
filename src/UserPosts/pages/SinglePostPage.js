import React from 'react';
import Post from '../components/Post';
import { useSelector} from 'react-redux';

const SinglePostPage=(props)=>{
      const post = findPost(useSelector(state => state.postsReducer), props.match.params.id); 
    return(
        <section>
          <Post key={post.id} post={post} />
         </section>
    );
}
let findPost=(postsReducer, id)=>{
  return postsReducer.posts.find(post=>post.id==id);
}

export default SinglePostPage;