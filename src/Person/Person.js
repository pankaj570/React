import React from 'react'

const Person = (props)=>{
    return(
    <div>
        <p1 onClick={props.click}>i am a {props.name} and i am {props.age}</p1>
        <p1>{props.otherData}</p1>
        <input onChange={props.change} type='text' value={props.name}/>
    </div>
    )
}

export default Person