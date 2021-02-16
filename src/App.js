import React, {useState} from 'react';
import Top from './components/top';
import Mid from './components/middle';
import Ex from './components/ex';


function Alert(){
  alert("I am the function");
}

function Demo(){
  return (
    <div>
      <Top pageInfo = "Profile Page" alertFun = {Alert}/> 
    <Ex/>
      <Mid/>
    </div>
  );
}

export default Demo;





