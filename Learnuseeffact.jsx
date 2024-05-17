import React,{useState , useEffect} from 'react';

const Learnuseeffact = () => {

const [ count, setCount] = useState(0)
 
function addCount (){
    setCount(c => c+1)



}
    return (
        <div>
            <p>count: {count}</p>
            <button onClick={addCount}> Count </button>
            
        </div>
    );
};

export default Learnuseeffact;