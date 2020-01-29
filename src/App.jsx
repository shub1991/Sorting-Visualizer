/* eslint-disable*/
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bars from './components/bars/bars';

function App() {
  const [test,setTest] = useState([80,70,60,50,40,20,30,100]);
  const [activeIndex,setActiveIndex] = useState(0);
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  const bubbleSort = async () => {
    let arr = test;
    for(let i=0;i<arr.length;i++){
      for(let j=0;j<arr.length-1-i;j++){
        setActiveIndex(j);
         if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;

         }
         await sleep(1000);
         setTest([...arr]);
      }
    }

  }
  return (
    <div>
      <Bars barArray={test} activeIndex={activeIndex}/>
      <button onClick={bubbleSort}>onClick</button>
    </div>

  );
}

export default App;
