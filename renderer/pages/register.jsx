import React, { useState } from "react";
import { useFormik } from "formik";
import { registerValidate } from "../lib/validate";
import { useRouter } from "next/router";

const register = () => {
  const [show, setShow] = useState({ password: false, cpassword: false });

  const router = useRouter();
  
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    // validate: registerValidate,
    onSubmit,
  });


  async function onSubmit(values) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    await fetch("http://localhost:8888/api/auth/signup", options)
      .then((res) => res.json())
      .then((data) => {
        if (data) router.push("http://localhost:8888");
      });
  }
  return (
    <div>
      {" "}
      <div className="flex justify-center items-center h-screen">
        <div className="bg-[#343a40] border border-solid border-[#495057] rounded-lg w-[30%] h-[40%] p-6">
          <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
            <div className="flex">
              <input
                type="text"
                name="Username"
                placeholder="Username"
                className="py-2 px-3 w-[100%] leading-[120%] text-[1.1rem] font-[500] text-center bg-[#212529] rounded"
                {...formik.getFieldProps("username")}
              />
              <span className="icon flex items-center px-4">
                {/* <HiOutlineUser size={25} /> */}
              </span>
            </div>
            <div className="flex">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="py-2 px-3 w-[100%] leading-[120%] text-[1.1rem] font-[500] text-center bg-[#212529] rounded"
                {...formik.getFieldProps("email")}
              />
              <span className="icon flex items-center px-4">
                {/* <HiAtSymbol size={25} /> */}
              </span>
            </div>
            <div className="flex">
              <input
                type={`${show.password ? "text" : "password"}`}
                name="password"
                placeholder="password"
                className="py-2 px-3 w-[100%] leading-[120%] text-[1.1rem] font-[500] text-center bg-[#212529] rounded"
                {...formik.getFieldProps("password")}
              />
              <span
                className="icon flex items-center px-4"
                onClick={() => setShow({ ...show, password: !show.password })}
              >
                show
              </span>
            </div>

            <div className="flex">
              <input
                type={`${show.cpassword ? "text" : "password"}`}
                name="cpassword"
                placeholder="Confirm Password"
                className="py-2 px-3 w-[100%] leading-[120%] text-[1.1rem] font-[500] text-center bg-[#212529] rounded"
                {...formik.getFieldProps("cpassword")}
              />
              <span
                className="icon flex items-center px-4"
                onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
              >
                show
              </span>
            </div>

            {/* login buttons */}
            <div className="input-button">
              <button
                type="submit"
                className="py-2 px-3 flex items-center justify-center gap-2 bg-[#0D6EFD] rounded mr-2"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default register;
