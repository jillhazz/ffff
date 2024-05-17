import React, { useState } from "react";
function Fruits (){
    const [foods, setFoods] = useState(["Appple","Orange","Banana" ]);


    

    function handleAddFood(){

    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "" ;
      setFoods( f =>[...f, newFood])

    }
function handleRemoveFood(index){
    setFoods(foods.filter(( _, i) => i!== index));


}



return( <div>

<h2 className=" bg-red-600">List of food</h2>


<ul>

{foods.map((food, index)=> <li key={index} onClick={ () =>handleRemoveFood(index)}> {food}</li>)}

</ul>
<input type = "text" id = "foodInput" placeholder = "মন যা চায় লিখি এখানে"/>

<button onClick = {handleAddFood}>Add anything</button>
</div>
)
 }
 export default Fruits;