import { Button, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";

const Header = () => {
  const [showCurreny, setShowCurreny] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [curreny, setCurreny] = useState("$ USD");
  const [time, setTime] = useState("24 Hours");
  const items = ["$ USD", "₹ INR", "AED"];
  const times = ["24 Hours", "7 Days", "Month", "Year", "5 Years"];
  const { session } = useSession();
  return (
    <>
      <nav className="flex justify-between px-3 py-3">
        <div className="flex items-center gap-[32px]">
          <Link href="/home">
            <div className="italic font-[700] text-[20px] leading-[150%] cursor-pointer">
              freqtradebot
            </div>
          </Link>
          <p className="text-[16px] leading-[150%]">v1.2</p>
          <p className="text-[16px] leading-[150%] text-[#A0A0A0]">Github</p>
        </div>
        <div className="relative flex gap-2">
          {session ? (
            <>
              <button
                className="py-2 px-3 bg-[#DC3545] rounded"
                onClick={() => signOut()}
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <button
                className="py-2 px-3 flex items-center justify-center gap-2 bg-[#0D6EFD] rounded mr-2"
                onClick={() => signIn()}
              >
                Sign in
              </button>
            </>
          )}
          <div
            className="flex px-[13px] py-[5px] items-center gap-[16px] border cursor-pointer border-gray-600 rounded-[4px] mr-2"
            onClick={(e) => {
              e.preventDefault();
              setShowCurreny(!showCurreny);
            }}
          >
            <h1 className="text-[16px] leading-[150%]">{curreny}</h1>
            <svg
              className=""
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.32906 7.16172L2.33156 3.73547C1.97781 3.33234 2.26531 2.69922 2.80219 2.69922H8.79719C8.91734 2.69912 9.03498 2.73365 9.13601 2.79868C9.23704 2.86372 9.31719 2.95649 9.36685 3.0659C9.41651 3.17531 9.43358 3.29672 9.41601 3.41558C9.39845 3.53444 9.347 3.64572 9.26781 3.73609L6.27031 7.16109C6.21165 7.22822 6.13931 7.28203 6.05813 7.31889C5.97696 7.35576 5.88884 7.37483 5.79969 7.37483C5.71054 7.37483 5.62242 7.35576 5.54125 7.31889C5.46007 7.28203 5.38773 7.22822 5.32906 7.16109V7.16172Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            className="flex px-[13px] py-[5px] items-center gap-[16px] border cursor-pointer border-gray-600 rounded-[4px]"
            onClick={(e) => {
              e.preventDefault();
              setShowTime(!showTime);
            }}
          >
            <h1 className="text-[16px] leading-[150%]">{time}</h1>
            <svg
              className=""
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.32906 7.16172L2.33156 3.73547C1.97781 3.33234 2.26531 2.69922 2.80219 2.69922H8.79719C8.91734 2.69912 9.03498 2.73365 9.13601 2.79868C9.23704 2.86372 9.31719 2.95649 9.36685 3.0659C9.41651 3.17531 9.43358 3.29672 9.41601 3.41558C9.39845 3.53444 9.347 3.64572 9.26781 3.73609L6.27031 7.16109C6.21165 7.22822 6.13931 7.28203 6.05813 7.31889C5.97696 7.35576 5.88884 7.37483 5.79969 7.37483C5.71054 7.37483 5.62242 7.35576 5.54125 7.31889C5.46007 7.28203 5.38773 7.22822 5.32906 7.16109V7.16172Z"
                fill="white"
              />
            </svg>
          </div>
          {showCurreny && (
            <ul className="bg-[#343A40] z-50 right-32 top-9 mt-1 py-[8px] w-[160px] absolute rounded-[4px]">
              {items.map((item, index) => {
                return (
                  <li
                    onClick={(e) => {
                      e.preventDefault();
                      setCurreny(item);
                      setShowCurreny(false);
                    }}
                    className="hover:bg-[#0D6EFD] cursor-pointer text-[#DEE2E6] pl-[16px] py-2"
                    key={index}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          )}
          {showTime && (
            <ul className="bg-[#343A40] z-50 right-3 mt-1 py-[8px] top-9  w-[160px] absolute rounded-[4px]">
              {times.map((item, index) => {
                return (
                  <li
                    onClick={(e) => {
                      e.preventDefault();
                      setTime(item);
                      setShowTime(false);
                    }}
                    className="hover:bg-[#0D6EFD] cursor-pointer text-[#DEE2E6] pl-[16px] py-2"
                    key={index}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};
export default Header;
