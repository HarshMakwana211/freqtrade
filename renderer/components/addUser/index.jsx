import React, { useEffect, useState } from "react";
import Close from "../icons/close-button";
import generator from "generate-password";

const AddUser = (
  {
    //   title = "Add Distribution",
    //   btnLabel = "Add and Generate id Password",
    //   onClick,
  }
) => {
  const [postsState, setPostsState] = useState();
  const [values, setValues] = useState({
    name: "",
    binanceId: "",
    telegramId: "",
    volume: "",
    commCut: "",
  });

  // useEffect(() => {
  //   setPostsState(allUsers);
  // }, [allUsers]);

  var password = generator.generate({
    length: 15,
    numbers: true,
  });

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("http://localhost:8888/api/user");
      const data = await res.json();
      setPostsState(data.data);
    };
    fetchPosts();
  }, []);

  // {
  //   name: "Akshay Jadhav",
  //   addOn: "added on 12 Feb 2023",
  //   info: {
  //     binance: "aksh2234",
  //     telegram: "aksh2234",
  //     appId: "aksh2234",
  //     password: "aksh2234",
  //   },
  //   comcut: "20%",
  //   lastUpdated: "Last Updated: 22 Jan 2023",
  // }

  let submitForm = async (e) => {
    console.log("clicked");
    e.preventDefault();
    let res = await fetch("http://localhost:8888/api/user", {
      method: "POST",
      body: JSON.stringify({
        name: values.name,
        addedOn: "",
        info: {
          binanceId: values.binanceId,
          telegramId: values.telegramId,
          appId: "",
          appPassword: password,
        },
        volume: values.volume,
        commCut: values.commCut,
        lastUpdated: "",
      }),
    });
    res = await res.json();
    setPostsState([...postsState, res]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className={`flex justify-center place-items-end`}>
      <div className="fixed bg-[#212529] h-[50%] w-[40%] block border border-solid border-[#CED4DA3d] rounded">
        <div className="flex justify-between border-b border-solid border-[#ced4da3d] p-4">
          <div className="title">
            <h1 className="leading-[120%] text-[1.5rem] font-[500]">
              Add Distributer
            </h1>
          </div>
          <button className="">
            <Close />
          </button>
        </div>
        <div className="p-4 flex gap-2 flex-col">
          <form className="flex flex-col gap-4">
            <div className="">
              <span className="leading-[120%] text-[1.1rem] font-[500]">
                Distributer Name
              </span>
              <div className="">
                <input
                  type="text"
                  onChange={handleInputChange}
                  name="name"
                  className="py-2 px-3 w-[100%] leading-[120%] rounded text-[1.1rem] font-[500] bg-[#212529]  border border-solid border-[#CED4DA]"
                />
              </div>
            </div>
            <div className="flex gap-4 w-full">
              <div className="">
                <span className="leading-[120%] text-[1.1rem] font-[500]">
                  Binance Id
                </span>
                <div className="">
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="binanceId"
                    className="py-2 px-3 w-[100%] leading-[120%] text-[1.1rem] font-[500] bg-[#212529] rounded border border-solid border-[#CED4DA]"
                  />
                </div>
              </div>
              <div className="">
                <span className="leading-[120%] text-[1.1rem] font-[500]">
                  Telegram Id
                </span>
                <div className="">
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="telegramId"
                    className="py-2 px-3 w-[100%] leading-[120%] text-[1.1rem] font-[500] bg-[#212529] rounded border border-solid border-[#CED4DA]"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4 w-full">
              <div className="">
                <span className="leading-[120%] text-[1.1rem] font-[500]">
                  Volume
                </span>
                <div className="">
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="volume"
                    className="py-2 px-3 w-[100%] leading-[120%] text-[1.1rem] font-[500] bg-[#212529] rounded border border-solid border-[#CED4DA]"
                  />
                </div>
              </div>
              <div className="">
                <span className="leading-[120%] text-[1.1rem] font-[500]">
                  CommCut%
                </span>
                <div className="">
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="commCut"
                    className="py-2 px-3 w-[100%] leading-[120%] text-[1.1rem] font-[500] bg-[#212529] rounded border border-solid border-[#CED4DA]"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="p-4 border-t border-solid border-[#CED4DA3D] flex justify-end">
          <button
            type="submit"
            onClick={submitForm}
            className="py-2 px-3 flex items-center justify-center gap-2 bg-[#0D6EFD] rounded w-[50%] text-[calc(10%+1vw)] cursor-pointer"
          >
            Add and Generate id password
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
