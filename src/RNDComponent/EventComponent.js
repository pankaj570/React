import React from 'react';

class EventComponent extends React.Component{
   
   handleEvent=(event)=>{
       console.log(event.target.outerText);
   }
   
    render(){
       return(
           <div>
               <button onClick={this.handleEvent}>click</button>
           </div>
       );
    };
}

export default EventComponent;
