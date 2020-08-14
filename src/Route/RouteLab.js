import React, {Component} from 'react';
import { 
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link
} from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import About from './About';
import ErrorPage from './ErrorPage';
import Topics from './Topics';

class RouteLab extends Component {
    render() {
        return (
            <Router>
            <div>
                <h1>click below link</h1>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/topics'>Topics</Link></li>
                    </ul>
                </nav>
                <hr/>
                <Switch>
                    <Route  exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/topics' component={Topics} />
                    <Route component={ErrorPage}/>
                </Switch>
            </div>
            </Router>
        );
    }
}

export default RouteLab;