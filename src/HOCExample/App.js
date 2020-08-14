import React from 'react';
import List from './List';
import WithLoading from './withdLoading';
import axios from 'axios'

const ListWithLoading = WithLoading(List);
class App extends React.Component {
  state = {

  };
  componentDidMount() {
    this.setState({ loading: true });
    axios.get(`https://api.github.com/users/hacktivist123/repos`)
      .then((repos) => {
        console.log('response :',repos)
        this.setState({ loading: false, repos: repos.data });
      })
      .catch(error=>{
        console.log('error :',error) 
        this.setState({loading:true, repos:error})
      })
  }
  render() {
    return (
         <ListWithLoading
          isLoading={this.state.loading}
          repos={this.state.repos}
      />
    );
  }
}
export default App;
