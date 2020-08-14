import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    useLocation
} from 'react-router-dom';



let QueryParam =()=>{
    Lab();
  return(
   <Router>
      <QueryDemo />
   </Router>
  );
}

export default QueryParam;

let Lab=()=>{

    //let arr= ["a","d","c", "v"];  
    //console.log(arr);
    
   // arr.splice(0,1);
   // console.log(arr);

   // arr.splice(0, 1, "cd", "vc");
   // console.log(arr);

  // arr.splice(-2,2, "bn","nm");
  // console.log(arr)

//   let arr1=[1,2,3];
//   let arr2=[6,7,8,9];

//   let arr3 = arr1.concat(arr2);

//   console.log(arr3);

//let arr = ["a","c","b","c"];

// arr.forEach((value, index, arr)=>{
//   console.log(`Value : ${value} Index : ${index} Array : ${arr}`);
// });

//arr.forEach(value=>console.log(`Value : ${value}`));

//console.log(arr.indexOf("a",0));
//console.log(arr.lastIndexOf("c"));

// let users=[
// {id: 1, name: "John"},
// {id: 2, name: "Pete"},
// {id: 3, name: "Marys"}
// ]

// console.log(JSON.stringify(users.map(value=>value.name)));

//let user = users.find(user=>user.id==3);
//console.log(`User : ${JSON.stringify(user)}`);

//let usersRes = users.filter(user=>user.id>1);
//console.log(`Users : ${JSON.stringify(usersRes)}`);

// let modifiedUsers = users.map((value, index, arr)=>{
//     let users = [];
//     users.push({'name':value.name, 'length':value.name.length});
//     return users;
// });
// console.log(`Lenghts of Names :${JSON.stringify(modifiedUsers)}`);

//  let arr = [1, 2, 3, 4, 5];
//    let sum = arr.reduce((sum, current)=>sum+=current)
//    console.log('value of sum:',sum);

// let str = 'background-color';

// let modifeid = str.split('-')
//     .map((value, index)=>index==0?value:value[0].toUpperCase()+value.slice(1))
//     .join('');
//     console.log(modifeid)


// let arr = [5, 3, 8, 1];
// //filterRange(arr, 1, 4);
// arr.sort((a,b)=>a-b);
// console.log(arr);

// let arr = ["HTML", "JavaScript", "CSS"];

// let copyarray = [...arr].sort();
// console.log(copyarray);
// console.log(arr);


// let users=[
//   { name: "John", age: 30, id: 1 },
//   { name: "Pete", age: 45, id: 2 },
//   { name: "Mary", age: 21, id: 3 }
// ]

// //let modifedUser = users.map(user=>({'Full Name':`${user.name} ${user.surname}`, 'id':user.id }));
// let sortArr = sortBySurname(users)
// console.log(JSON.stringify(sortArr))

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// let result=[];
// for(let i=0; i<strings.length; i++){
//      if(!result.includes(strings[i])){
//         result.push(strings[i]);
//      }
// }

// console.log(result);


}

// let sortBySurname=(users)=>{
//    return users.sort((a,b)=>a.name.localeCompare(b.name));
// }






// let filterRange=(arr, a, b)=>{
//   // return arr.filter(value=>(a<=value && b>=value));

//   for(let i=0; i<arr.length; i++){
//     let val = arr[i];
//     if(val<a || val >b){
//       arr.splice(i,1);
//       i++;
//     }
//   }
// }


// for of and In

//let scores =[80, 90, 70]
//let scores = 'pankaj';

// let scores = new Map();
// scores.set("red","20");
// scores.set("ced","20");
// scores.set("ped","20");

// let scores = new Set([1,2,3,3,3,3,4]);

// for(let score of scores){
//   console.log(score);
// }

//let numbers = [6, 7, 8];
//numbers.foo = "foo";
//in not work for Array, set , Map collection


// for (let i in numbers) {
//     console.log(i);
// }


// const person = {
//    name : "pankaj",
//    address:"patna"
// }
//person.age = 20;

// Object.defineProperty(person, "age",{
//   enumerable: true,
//   value: "20"
// })

// for(let key in person){
//   console.log(key);
// }

// destructuring
// let profile= [
//  'john',
//  'ram',
//   [
//     'Red', 'Green', 'Blue'
//   ]
// ]
// let[
//   john,
//   ram,
//   [red, green, blue]
// ] = profile;

// console.log(red, green, blue);


// let summary=(a,b)=>{
//   return [
//     a+b,
//     a-b,
//     a+b/2,
//   ]
// }
// let [sum, minus, avg] = summary(10,10);
// console.log('SUM :', sum, "Minus :", minus, "Avg :", avg);

// let person={
//   name:"pankaj",
//   lastName:"Singh",
//   address:{
//     street:"Bengalore",
//     post:"Domlur"
//   }
// }


// let {name, lastName} = person;
// console.log(name, lastName);

// let {
//   name : Name,
//   lastName : LastName='Mohan'
// } = person;

// console.log(Name, LastName)


// function* generate(){
//   console.log('A');
//   yield 1;
//   console.log('B');
//   yield 2;
// }

// let gen = generate();
// console.log(gen);

// console.log(gen.next())
// console.log(gen.next())

//print 1 to 10 

 // Map Datastructure

  let personMap = new Map();
  personMap.set('pankaj1', 'pankaj')
            .set('Mohan', 'mohan');
            
  //console.log(personMap instanceof Map);
  //console.log(typeof(personMap));
  //console.log(personMap.get('pankaj'));
  //console.log(personMap.has('pankaj'))
  //console.log('Number of Element :', personMap.size);

  // for(let [key, value] of personMap.entries()){
  //   console.log(`key :${key} value :${value}`);
  // }

  // personMap.forEach((key, value)=>{
  //   console.log(`key :${key} value :${value}`);
  // });

  // let keys = [...personMap.keys()];
  // console.log(keys);

 // Object Assign
   //assign()-> clone and merge the objects in 

 let color1={
   yellow:'yellow',
   red:'red'
 }

 let color2={
  yellow:'yellow',
  red:'red'
}

  let cloneColor = Object.assign({}, color2, color1);
  console.log(cloneColor);
  //console.log(Object.is(color2, color1)); --> false

























let QueryDemo =()=>{

     let query = new URLSearchParams(useLocation().search);
     let name = query.get('name');
     //console.log(name);
  return(
    <div>
    <div>
      <h2>Accounts</h2>
      <ul>
        <li>
          <Link to="/account?name=netflix">Netflix</Link>
        </li>
        <li>
          <Link to="/account?name=zillow-group">Zillow Group</Link>
        </li>
        <li>
          <Link to="/account?name=yahoo">Yahoo</Link>
        </li>
        <li>
          <Link to="/account?name=modus-create">Modus Create</Link>
        </li>
      </ul>

      <Chiled name={name} />
    </div>
  </div>
  );
}

let Chiled=(props)=>{
   // console.log(props);
 return(
     <div>
        <button onClick={setInterval(activeTimer, 2000)}>click me</button>

         {
           props ?
            (<h1>The code has query String : {props.name} </h1>) 
            :
            (<h1>Code has no Query String</h1>) 
         }
     </div>
 );
}


let activeTimer=()=>{
  console.log('pankaj');
}