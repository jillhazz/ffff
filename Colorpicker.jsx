import React,{useState} from 'react';

const Colorpicker = () => {
    const [color,setColor] = useState ("blue");


     function handleColorChange(event){
        setColor(event.target.value)


     }
    return (
        <div className='p-8 text-center justify-center text-2xl font-bold'>
         
            <div className='gap-4' style={{backgroundColor: color}}>
                <p className='  border-opacity-50 p-5 text-3xl bg-transparent bg-opacity-100 text-justify text-white -translate-x-6
                '>Copy  Code={color}</p>
             </div>
             <div className='text-2xl p-5 font-extrabold'>Show the selected Color Here....</div>
             <input type="color" value={color} onChange = {handleColorChange}></input>
        
             <h1 className=' text-pretty font-thin'>Pick your favourite color</h1>
        </div>
    );
}

export default Colorpicker;