import React from "react";
import Tick from "../icons/Tick";

const Card = ({ data }) => {
  return (
    <div className="bg-[#343a40] border border-solid border-[#495057] rounded-lg p-6 w-[49%]">
      <div className="flex justify-between items-center border-b border-solid border-[#ffffff1a]">
        <div className="flex items-center gap-4">
          <span className="font-[700] mb-1 text-[1.5rem] leading-[150%] text-[#6C757D]">
            Distributor
          </span>
          <h1 className="leading-[120%] text-[1.5rem] font-[500]">
            {data.name ? data.name : "NA"}
          </h1>
        </div>
        <div className="">
          <div className="font-[700] mb-1 text-[1rem] leading-[150%] text-[#6C757D]">
            {data.addOn ? data.addOn : "NA"}
          </div>
        </div>
      </div>
      <div className="flex justify-between p-2">
        <div className="w-[45%]">
          <div className="pb-4 mb-4 border-b border-solid border-[#ffffff1a]">
            <div className="flex gap-2 p-[0.2]">
              <span className="font-[700] mb-1 text-[1rem] leading-[150%] text-[#6C757D]">
                Binance ID
              </span>
              <span className="leading-[120%] text-[1.1rem] font-[500]">
                {data.info.binance ? data.info.binance : "NA"}
              </span>
            </div>
            <div className="flex gap-2 p-[0.2]">
              <span className="font-[700] mb-1 text-[1rem] leading-[150%] text-[#6C757D]">
                Telegram ID
              </span>
              <span className="leading-[120%] text-[1.1rem] font-[500]">
                {data.info.telegram ? data.info.telegram : "NA"}
              </span>
            </div>
          </div>
          <div className="">
            <div className="flex gap-2 p-[0.2]">
              <span className="font-[700] mb-1 text-[1rem] leading-[150%] text-[#6C757D]">
                App ID
              </span>
              <span className="leading-[120%] text-[1.1rem] font-[500]">
                {data.info.appId ? data.info.appId : "NA"}
              </span>
            </div>
            <div className="flex gap-2 mb-1 p-[0.2]">
              <span className="font-[700] mb-1 text-[1rem] leading-[150%] text-[#6C757D]">
                App Password
              </span>
              <span className="leading-[120%] text-[1.1rem] font-[500]">
                {data.info.password ? data.info.password : "NA"}
              </span>
            </div>
          </div>
          <button className="py-2 px-3 bg-[#DC3545] rounded">
            <span>Reset Password</span>
          </button>
        </div>
        <div className="w-[45%]">
          <div className="pb-4 mb-4 border-b border-solid border-[#ffffff1a]">
            <div className="flex my-1 gap-2 p-[0.2]">
              <span className="font-[700] text-[1rem] leading-[150%] text-[#6C757D]">
                Volume
              </span>
              <span className="leading-[120%] text-[1.1rem] font-[500]">
                $10,000.00
              </span>
            </div>
          </div>
          <div className="">
            <span className="leading-[120%] text-[1.1rem] font-[500]">
              CommCut%
            </span>
            <div className="flex gap-1">
              <div className="">
                <input
                  type="text"
                  className="py-2 px-3 w-[100%] leading-[120%] text-[1.1rem] font-[500] text-center bg-[#212529] rounded border border-solid border-[#CED4DA]"
                  value={data.comcut ? data.comcut : "NA"}
                />
              </div>
              <div className="{s.btn}">
                <button className="py-2 px-3 flex items-center justify-center gap-2 bg-[#0D6EFD] rounded">
                  <Tick />
                  Update
                </button>
              </div>
            </div>
            <span className="font-[700] mb-1 text-[1rem] leading-[150%] text-[#6C757D]">
              {data.lastUpdated ? data.lastUpdated : "NA"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
