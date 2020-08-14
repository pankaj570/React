import React from 'react'
import Listcss from './ListItem.css'
const ListItem = (props) => {
    const listItems = props.listOfPerson.map((value, index) =>
        <div className="card">
           <table>
               <tr>
                   <td><li className="list" key={index}>{value}</li></td>
                   <td><button className="button" onClick={props.deleteItemHandler} value={index}>Delete Item</button></td>
               </tr>
           </table> 
        </div>

    );
    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    )
}

export default ListItem