
import React from 'react';
import API from './api';
import { wait } from '@testing-library/react';

class DeletePerson extends React.Component{

    state={
        id:''
    }

    changeHandler=(event)=>{
        this.setState({id:event.target.value});
    }

    deleteHandler= async (event)=>{
        // event.preventDefault();
        // API.delete(`users/${this.state.id}`)
        // .then(response=>{console.log('response:',response)})
        // .catch(error=>{console.log('error :',error)})

        event.preventDefault();
        const response = await API.delete(`users/${this.state.id}`);
        console.log(response);
        console.log(response.data);
    }

    render(){
        return(
            <div>
               <form>
                   <label><b>Person Id :</b>
                       <input type='text' name='id' onChange={this.changeHandler} />
                   </label>
                   <button type="submit" onClick={this.deleteHandler}>Delete</button>
               </form>
            </div>
        );
    }
}

export default DeletePerson;