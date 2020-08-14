import React, { Component } from 'react';
import API from './api';
import './PersonDetails.css';

class PersonList extends Component {
    state = {
        persons: []
    }
    componentDidMount() {
        API.get(`users`)
            .then(response => {
                console.log('response :', response)
                this.setState({
                    persons: response.data
                });
            })
            .catch(error=>{
                console.log('Error :',error.statusText)
            })
    }
    render() {
        let count=0;
        return (
            <div>
                <h1 className='h1'>Person's Details</h1>
                <div className='div'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Website</th>
                                <th>Company</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.persons.map(person =>
                                <tr>
                                    <td>{person.id}</td>
                                    <td>{person.name}</td>
                                    <td>{person.username}</td>
                                    <td>{person.email}</td>
                                    <td>
                                    <table>
                                        <tbody>
                                            <tr><td><b>Street :</b></td><td>{person.address.street}</td></tr> 
                                            <tr><td><b>Suite : </b></td><td>{person.address.suite}</td></tr>
                                            <tr><td><b>City : </b></td><td>{person.address.city}</td></tr>
                                            <tr><td><b>Zip Code : </b></td><td>{person.address.zipcode}</td></tr>
                                            <tr><td><b>Latitude : </b></td><td>{person.address.geo.lat}</td></tr>
                                            <tr><td><b>Longitude : </b></td><td>{person.address.geo.lng}</td></tr>
                                            </tbody>
                                        </table>
                                    
                                    </td>
                                    <td>{person.phone}</td>
                                    <td>{person.website}</td>
                                    <td>
                                        <ul className='ul'>
                                            <li key={person.company.name}><b>Name : </b>{person.company.name}</li>
                                            <li key={person.company.catchPhrase}><b>CatchPhrase : </b>{person.company.catchPhrase}</li>
                                            <li key={person.company.bs}><b>BS : </b>{person.company.bs}</li>
                                        </ul>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

export default PersonList