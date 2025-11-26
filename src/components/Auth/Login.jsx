import React, { useState } from "react";

function Login({handleLogin}) {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, passwd)
    console.log(`email is ${email}`);
    console.log(`passwd is ${passwd}`);

  };
  return (
    <div className="flex w-screen h-screen justify-center items-center ">
      <div className="border-red-300 rounded-2xl border-2 p-5">
        <h1 className="text-3xl font-extrabold">Login to the DashBoard</h1>
        <form
          className="flex flex-col items-center "
          onSubmit={(e) => submitHandler(e)}
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="email"
            placeholder="Email"
            className="border-red-600 border-2 rounded-3xl p-3 text-xl mt-7"
          />
          <input
            value={passwd}
            onChange={(e) => {
              setPasswd(e.target.value);
            }}
            required
            type="password"
            placeholder="Password"
            className="border-red-600 border-2 rounded-3xl p-3 text-xl mt-5"
          />
          <button className="bg-red-400 py-3 px-10 text-xl text-black border-2 border-red-50 rounded-3xl mt-6 cursor-pointer">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
