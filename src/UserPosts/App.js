import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
    } from 'react-router-dom';
    
//user component
import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';
import PostsPage from './pages/PostsPage';
import SinglePostPage from './pages/SinglePostPage';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={DashboardPage} />
                <Route exact path="/posts" component={PostsPage} />
                <Route exact path="/SinglePost/:id" component={SinglePostPage}/>
                <Redirect to="/" />
            </Switch> 
        </Router>

    );
}

export default App;