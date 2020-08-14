import React from 'react';
import { useRouteMatch, Switch, Link, Route } from 'react-router-dom';
import Topic from './Topic';

let Topics = () => {
    let useRouteMatch1 = useRouteMatch();
    console.log(useRouteMatch1);
    ///let { path, url } = useRouteMatch1;
    return (
            <div>
                <h1>Topics</h1>
                <nav>
                    <ul>
                        <li><Link to={useRouteMatch1.path+'/Java'}>Java</Link></li>
                        <li><Link to={useRouteMatch1.path+'/C++'}>C++</Link></li>
                        <li><Link to={useRouteMatch1.path+'/Python'}>Python</Link></li>
                    </ul>
                </nav>
                <hr />

                <Switch>
                    <Route path={useRouteMatch1.path+'/:topicId'} component={Topic} />
                </Switch>
            </div>
    );
}
export default Topics;