import React from 'react';
import API from './api';
class PostPerson extends React.Component {
    state={
        name:''
    }

    handleChange=(event) =>{
    this.setState({
        name:event.target.value
    });
    }
    handleSubmit=(event) =>{
     event.preventDefault();
     const user={
         name : this.state.name
     };
     API.post(`/users`,{user})
     .then(response=>{
         console.log('rsponse:',response)
     })
     .catch(error=>{
         console.log('error :',error)
     })
    }
    
render() {
        return (
            <div>
                <form>
                    <label> <b>Person Name :</b>
                    <input type='text' name='name' onChange={this.handleChange} />
                    </label>
                    <button type='submit' onClick={this.handleSubmit}>Add</button>
                  </form>
          </div >
      )
    }
}

export default PostPerson;