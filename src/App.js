import React, {useState} from 'react';
import Top from './components/top';
import Mid from './components/middle';
import Ex from './components/ex';
import Loop from './components/loop';
import UseEff from './components/useeff';


function Alert(data){
  alert(data);
}

function Demo(){
  // const [number, setNumber] = useState(0);
  return (
    <div>
      <UseEff/>
    </div>
  );
}

export default Demo;





