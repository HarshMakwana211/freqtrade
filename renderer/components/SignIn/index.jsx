import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";

const SignIn = (props) => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    // validate your userinfo
    e.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });
    // .then((user) => {
    //   setUserInfo({ email: "", password: "" });
    // });

    console.log(res);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#343a40] border border-solid border-[#495057] rounded-lg w-[30%] h-[30%] p-6">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <h1 className="leading-[120%] text-[1.5rem] font-[500] text-center">
            Login
          </h1>
          <input
            className="py-2 px-3 w-[100%] leading-[120%] text-[1.1rem] font-[500] text-center bg-[#212529] rounded"
            value={userInfo.email}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, email: target.value })
            }
            type="email"
            placeholder="john@email.com"
          />
          <input
            className="py-2 px-3 w-[100%] leading-[120%] text-[1.1rem] font-[500] text-center bg-[#212529] rounded"
            value={userInfo.password}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, password: target.value })
            }
            type="password"
            placeholder="********"
          />
          <input
            className="py-2 px-3 flex items-center justify-center gap-2 bg-[#0D6EFD] rounded"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
