import React, { useState } from 'react';
import './stack.css'

function Stack(){
    const [inputValue, setInputValue]=useState('');

    // initilaise stack to be an array
    const [stack, setStack]=useState([]);
    // fucntion to push an elemnt in stack
    const addele=(ele)=>{
        setStack(prevData=>([...prevData, ele]));
    }
    //function to pop an element
    const removeele= ()=>{
        // const newArray = array.filter((_, i) => i !== index);
        const newStack= stack.slice(0,-1); // removes the last element
        setStack(newStack);
    }
    const topele=()=>{
       //  const topmost=stack[0];  cannot use this as we are accesing the bottom of the stack
       const topElement = stack[stack.length - 1];

        return topElement;
    }

    return(
        <div className='App'>
            <h1>Stack Data Structure Visualisation</h1>
            <div className='stack-cont'>
               {stack.map((ele,ind)=>(
                <div key={ind} className='stack-element'>
                    {ele};
                </div>
               ))}

            </div>
            <div className='insert-form'>
                <input type='text' placeholder='push' id='push' value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
                <button
                className='push'
                onClick={() => {
                    addele(inputValue); // Push the inputValue onto the stack
                    setInputValue(''); // Clear the input field after pushing
                }}>
                Push
              </button>
                <button className='pop' onClick={()=>removeele()}>Pop</button>
                {/* <input type='text' placeholder='pop' id='pop'/> */}

            </div>

        </div>
    )
}

export default Stack;