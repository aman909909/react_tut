import React, {useState} from 'react';


function Notify(){
    console.log("Here");
}
function Changed(evt){
    console.log(evt.target.value);
}



function Top(props){
    function inc(){
        //counter  = counter+1
        setCounter(counter+1);
    }
    var [counter, setCounter] = useState(9);
    return (
        <div> 
            {counter}
            <button onClick={inc}>Clickk</button>
            <input type="text" onChange ={Changed} ></input>           
            <h3>I am the top of the {props['pageInfo']}
            </h3>
        </div>
    );
}

export default Top;

