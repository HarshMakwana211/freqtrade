import React, { useState } from "react";
import Close from "../icons/close-button";

const Modal = ({
  title = "Add Distribution",
  btnLabel = "Add and Generate id Password",
  onClick,
  onChange,
  textValue,
}) => {
  const [show, setShow] = useState(true);

  return (
    <div
      className={`flex justify-center items-center ${
        show ? "block" : "hidden"
      }`}
    >
      <div className="fixed bg-[#212529] h-[30%] w-[50%] block border border-solid border-[#CED4DA3d] rounded">
        <div className="flex justify-between border-b border-solid border-[#ced4da3d] p-4">
          <div className="title">
            <h1 className="leading-[120%] text-[1.5rem] font-[500]">{title}</h1>
          </div>
          <button className="">
            <Close />
          </button>
        </div>
        <div className="p-4 flex gap-2 flex-col">
          <span className="leading-[120%] text-[1.1rem] font-[500]">
            Distributer Name
          </span>
          <div className="">
            <div className="">
              <input
                type="text"
                className="py-2 px-3 w-[100%] leading-[120%] text-[1.1rem] font-[500] bg-[#212529] rounded border border-solid border-[#CED4DA]"
                onChange={onChange}
                value={textValue}
              />
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-solid border-[#CED4DA3D] flex justify-end">
          <div
            className="py-2 px-3 flex items-center justify-center gap-2 bg-[#0D6EFD] rounded w-[50%] text-[calc(10%+1vw)] cursor-pointer"
            onClick={onClick}
          >
            {btnLabel}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
