import React, { useState } from "react";

const Auth = () => {
  const [signUp, setSignUp] = useState(true);
  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50">
      <div className="w-2/3 bg-white p-3 ">
        <h1 className="text-2xl text-gray-800 font-bold">{signUp ? "Register" : "Login"}</h1>
        <div className="flex flex-col space-y-3 my-5">
          {signUp && <input type="text" placeholder="Username" className="input-style" />}
          <input type="text" placeholder="Email" className="input-style" />
          <input
            type="password"
            placeholder="Password"
            className="input-style"
          />
        </div>
        <div className="text-red-500 text-xs cursor-pointer mb-4">
            {signUp ? <span onClick={()=>setSignUp(false)}>Already have an account? Login</span> : <span onClick={()=>setSignUp(true)}>Don't have an account</span>}
        </div>
        <div className="button-style">
          {signUp ? "Sing Up" : "Register"}
        </div>
      </div>
    </div>
  );
};

export default Auth;
