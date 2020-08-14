import React from 'react';
import {useParams} from 'react-router-dom';
const Topic = () =>{
    let p = useParams();
    let {topicId} = useParams();
    console.log(p);
    return(
        <div>
          <h1>Topic Name : {topicId}</h1>
        </div>
    );
}

export default Topic;