
import React from 'react';
import { useSelector, connect } from 'react-redux';
import Post from '../components/Post';
const PostsPage = (props) => {
    //let postsReducer = useSelector(state => state.postsReducer); 
    let arrayValue = props.postsReducer.posts.map((post) => (<Post key={post.id} post={post} />));
    return (
        <section>
            {arrayValue}
        </section>
    );
}

const mapStateToProps = state => {
    return { postsReducer: state.postsReducer }
}

export default connect(mapStateToProps)(PostsPage);