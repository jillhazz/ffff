/* eslint-disable react/prop-types */
function Student(props){
    
    return( <div className="">
        <p className="bg-red-300">Name: {props.name}</p>
        <p>Age: {props.age} </p>
        <p>Address: {props.adress} </p>
        <p>Student:  {props.isStudent? "Yes":"No"} </p>
    </div>
    );
}export default Student;