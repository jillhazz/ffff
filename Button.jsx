import profilePic from "./assets/Free.jpg"

function Button( ){
     
 return ( <>
 <div className="w-screen min-h-screen  flex justify-center items-center">

    <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row gap-6  bg-white p-10 rounded-xl shadow-2xl">
      <div className="w-full md:w-1/2 bg-[#E2ECFF] flex justify-center items-center rounded-md">
      <div className="flex flex-col justify-center items-center p-10 text-center">

       <img src={profilePic} alt=" finding a form "className="w-20 h-20 rounded-x hover:rotate-360 transition"/>

       <h1 className="text-2xl font-bold py-6">Lets help me for run your own web platform</h1>
    <p className="text-sm text-gray-600">Please register our platform for make a beautiful web exprience</p>
  </div>

     </div>
      <div className="w-full md:w-1/2 py-10">
        <h1 className="text-2xl font-bold">Get Started</h1>
        <p className="text-gray-500 pb-10">Create your account now!</p>
        <form action="#" className="flex flex-col gap-4">
          <div >
            <label className="text-gray-500 inline-block pb-4">Name:</label>
            <input type="text" name="fName" id="fName" placeholder="David" className="w-full border border-gray-500 rounded-md px-4 py-2 focus:outline-none  text-black" />
          </div>
          <div>
            <label  className="text-gray-500 inline-block pb-4">Email :</label>
            <input type="email" name="fEmail" id="fEmail" placeholder="david@gmail.com" className="w-full border border-gray-500 rounded-md px-4 py-2 focus:outline-none  text-black" />
          </div>
          <div>
            <label className="text-gray-500 inline-block pb-4">Password:</label>
            <input type="password" name="fPass" id="fPass" className="w-full border border-gray-500 rounded-md px-4 py-2 focus:outline-none  text-black" />
          </div>
          <div>
            <button className="bg-[#0082DF] w-full py-4 font-bold text-white rounded-md">Sign in</button>
          </div>
        </form>
        <p className="text-center pt-10">Account exist? <span className="text-[#0082DF] font-bold">Sign in</span></p>
      </div>
    </div>
  </div>
  </>
 )
};
export default Button;
