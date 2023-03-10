import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Card from "../components/Card";

function Edit() {
  const data = [
    {
      name: "Akshay Jadhav",
      addOn: "added on 12 Feb 2023",
      info: {
        binance: "aksh2234",
        telegram: "aksh2234",
        appId: "aksh2234",
        password: "aksh2234",
      },
      comcut: "20%",
      lastUpdated: "Last Updated: 22 Jan 2023",
    },
    {
      name: "Akshay Jadhav",
      addOn: "added on 12 Feb 2023",
      info: {
        binance: "aksh2234",
        telegram: "aksh2234",
        appId: "aksh2234",
        password: "aksh2234",
      },
      comcut: "20%",
      lastUpdated: "Last Updated: 22 Jan 2023",
    },
  ];
  return (
    <>
      <div className="px-16 py-8">
        <div className="flex">
          <div className="flex gap-6  px-3 mb-12 items-center">
            <h1 className="font-[500] text-[24px] leading-[120%]">
              2 Distributors
            </h1>
            <button className="bg-[#0D6EFD] rounded-[4px] border border-[#0D6EFD] py-2 px-3">
              + Add Distributor
            </button>
          </div>
          <div className="flex gap-6  px-3 mb-12 items-center">
            <h1 className="font-[500] text-[#6C757D] text-[24px] leading-[120%]">
              Total Volume: <span className="text-white">$20,000</span>
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap basis-6/12 gap-2">
          {data.map((item, index) => {
            return <Card key={index} data={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Edit;
