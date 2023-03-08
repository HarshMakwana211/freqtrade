import { useFormik } from "formik";
import { NextPage } from "next";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/router";
import login_validate from "../../lib/validate";

const SignIn = (props) => {
  // const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  // const handleSubmit = async (e) => {
  //   // validate your userinfo
  //   e.preventDefault();

  //   const res = await signIn("credentials", {
  //     email: userInfo.email,
  //     password: userInfo.password,
  //     redirect: false,
  //   });
  //   // .then((user) => {
  //   //   setUserInfo({ email: "", password: "" });
  //   // });

  //   console.log(res);
  // };

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validate,
    onSubmit,
  });

  /**
   * haleykennedy@gmail.com
   * admin123
   */

  // async function onSubmit(values) {
  //   const status = await signIn("credentials", {
  //     redirect: false,
  //     email: values.email,
  //     password: values.password,
  //     callbackUrl: "/",
  //   });

  //   if (status.ok) router.push(status.url);
  // }

  async function onSubmit(values) {
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/home",
    });
    if (status.ok) router.push(status.url);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#343a40] border border-solid border-[#495057] rounded-lg w-[30%] h-[30%] p-6">
        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
          <h1 className="leading-[120%] text-[1.5rem] font-[500] text-center">
            Login
          </h1>
          <input
            className="py-2 px-3 w-[100%] leading-[120%] text-[1.1rem] font-[500] text-center bg-[#212529] rounded"
            value={formik.values.email}
            onChange={formik.handleChange}
            type="email"
            name="email"
            placeholder="john@email.com"
          />
          <input
            className="py-2 px-3 w-[100%] leading-[120%] text-[1.1rem] font-[500] text-center bg-[#212529] rounded"
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            name="password"
            placeholder="********"
          />
          <input
            className="py-2 px-3 flex items-center justify-center gap-2 bg-[#0D6EFD] rounded"
            type="submit"
            value="Login"
          />
        </form>
      <div className="">
        <Link href="/register">
          <h1 className="text-center mt-4">Register</h1>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default SignIn;
