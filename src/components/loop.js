import React, {useState} from 'react';

function Loops(){

    const [fruits, setFruit] = useState(['apple', 'mango', 'banana']); 

    return (
        <div>
            {fruits.map((f, index) =>{
                return (
                    <div>
                    <h1>{f}</h1> 
                    <h2>{index}</h2>
                    </div>
                );
            })} 
        </div>
    );

}
export default Loops;