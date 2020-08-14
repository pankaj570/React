import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    useParams,
    useRouteMatch,
    Switch
} from 'react-router-dom';

let CyclicRoute = () => {
    return (
        <Router>
            <Switch>
                <Route path="/:id">
                    <Person />
                </Route>
                <Route path='/'>
                    <Redirect to='/0' />
                </Route>
            </Switch>
        </Router>
    );
}
export default CyclicRoute;

let Person = (props) => {
    let { url } = useRouteMatch();
    let { id } = useParams();
    let person = find(parseInt(id));

    console.log('URL :', url);
    console.log('ID :',id);
    console.log('Person :',person);
    

    return (
        <div>
            <h1>{person.name}'s Friends List</h1>
            <ul>
                {person.friends.map(id => (
                    <li key={id}>
                       <Link to={`${url}/${id}`}>{find(id).name}</Link> 
                    </li>
                ))}
            </ul>

            <Switch>
                <Route path={`${url}/:id`} component={Person}/>
            </Switch>
        </div>
    );
}


let PEEPS = [
    { id: 0, name: "Michelle", friends: [1, 2, 3] },
    { id: 1, name: "Sean", friends: [0, 3] },
    { id: 2, name: "Kim", friends: [0, 1, 3] },
    { id: 3, name: "David", friends: [1, 2] }
];

let find = (id) => {
    return PEEPS.find(p => p.id === id);
}