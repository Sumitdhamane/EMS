import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", { email, password });

    setEmail(""), setPassword("");
  };

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 rounded-xl border-emerald-600 p-20">
          <form
            onSubmit={submitHandler} // Simplified handler binding
            className="flex flex-col items-center justify-center"
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              required
              className="border-2 outline-none bg-transparent border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400"
              type="email"
              placeholder="Enter your email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              required
              className="border-2 outline-none bg-transparent border-emerald-600 py-3 px-5 text-xl rounded-full mt-4 placeholder:text-gray-400"
              type="password"
              placeholder="Enter password"
            />
            <button
              type="submit"
              className="mt-5 text-white border-none outline-none bg-emerald-600 py-3 px-5 text-xl rounded-full"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
