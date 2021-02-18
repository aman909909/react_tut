import React, {useState, useEffect} from 'react';

function UseEff(){

    const [counter, setCounter] = useState(0);
    const [te, setText] = useState("Default");
    const [apiData, setApiData] = useState(null);
    const [show, setShow] = useState(false);
    useEffect(() => {
        //api call true or false => setShow()

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
            headers: {
              
            }
          }).then( resp => resp.json())
          .then( resp => {
              setApiData(resp);
            })
          .catch( error => console.log(error));
    },[]);


    const changeText = () =>{
        setText("e");
    }

    return(
        <div>
            {console.log("here")}
            <h1>{counter}</h1>
            {apiData && apiData.map((data) =>{
                return (
                    <p>{data.title}</p>
                );
            })}
            <h1>{te}</h1>
            <button onClick={() => setCounter(counter+1)}> Inc</button>
            <button onClick={() => changeText()}> Change</button>
            <h1>Inside useeff</h1>
        </div>
    );
};

export default UseEff;
//api call