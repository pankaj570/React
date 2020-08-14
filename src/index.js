import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import ListComponent from './ListComponent/ListComponent';
import * as serviceWorker from './serviceWorker';
//import PersonList from './PersonDetails/PersonList';
//import PostPerson from './PersonDetails/PostPerson';
//import DeletePerson from './PersonDetails/DeletePerson';
//import EventComponent from './RNDComponent/EventComponent'
//import FormExample from './RNDComponent/FormExample'
//import App from './HOCExample/App';

//redux example
// import ReduxExample from './redux/redux';
// import rootReducer from './reducers/index';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';


// let store = createStore(rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// route 
//import RouteLab from './Route/RouteLab';

//Cyclic Route
//import CyclicRoute from './Route/CyclicRoute/CyclicRoute';
//import QueryParam from './Route/CyclicRoute/QueryParam';


import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


// user posts
import App from './UserPosts/App';
import rootReducer from './UserPosts/reducers/Index';
import API from './UserPosts/Api';
import { getPosts } from './UserPosts/actions/postsAction';

const store = createStore(rootReducer, applyMiddleware(thunk));
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  
  let promise = getDatas();
  Promise.resolve(promise).then(promise=>{
    //console.log('promise',promise.data);
    store.dispatch(getPosts(promise.data))
 });
 

  ReactDOM.render(
  // <Provider store={store}>
  //   <ReduxExample />
  // </Provider>,
  //*Route Lab
  // <RouteLab/>,
  //<CyclicRoute/>,
  //<QueryParam/>,

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

 function getDatas(){ 
  return API.get(`posts`);
}

serviceWorker.unregister();
