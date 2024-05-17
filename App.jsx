import Fruits from "./Fruits.jsx";
import Student from "./Student.jsx";
import Colorpicker from "./Colorpicker.jsx";
import Mycomponent from "./Mycomponent.jsx";
import Guildjoin from "./Guildjoin.jsx";
import Learnuseeffact from "./Learnuseeffact.jsx";
import Button from "./Button.jsx";
function App() {


  return( <> 

  <Mycomponent/>
<Student name= "Sazmul Hasan" age={28} adress = "Pailaty" isStudent={true} />
<Student name= "Badhon Talukdar" age={15} adress = "Pailaty"isStudent={false} />
<Student name= "Sharif Ahmed" age={21} adress = "Joypur" isStudent={true} />
<Fruits></Fruits>
<Colorpicker></Colorpicker>
<Guildjoin></Guildjoin>
<Learnuseeffact></Learnuseeffact>
<Button/>
<Button/>
<Button/>
  

</>
   


  );


} export default App;

