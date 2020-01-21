import React,{useState} from 'react';

function App() {
  const [test,setTest] = useState([8,7,6,5,4,2,3,1]);
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  const bubbleSort = async () => {
    let arr = test;
    for(let i=0;i<arr.length;i++){
      for(let j=i;j<arr.length;j++){
         if(arr[i]>arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            
         }
         await sleep(1000);
         setTest([...arr]);
      }
    }
  
  }
  return (
    <div className="App">
    hello
    {test}
    <button onClick={bubbleSort}>Sort</button>
    </div>
    
  );
}

export default App;
