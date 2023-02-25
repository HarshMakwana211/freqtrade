import React, { useState } from 'react';
import Head from 'next/head';
import Greenup from '../components/icons/Greenup';
import RedDown from '../components/icons/reddown';
import TableRow from '../components/TableRow';

function Home() {
  const [volume, setVolume] = useState("20,000");
  const [profitGained, setProfitGained] = useState("2,000");
  const [eth, setEth] = useState("1,682.75");
  const [btc, setBtc] = useState("24,746.80");
  const [distributors, setDistributors] = useState(2);
  const data = [
    {
      name: "Akshay Jadhav",
      volume: {
        value: "10,000",
        isUp: false,
        percentage: "4.03",
      },
      earned: {
        value: "300.84",
        isUp: true,
        percentage: "5.92"
      },
      comcut: "20",
      lastUpdated: "20 Feb 2023"
    },
    {
      name: "Anish",
      volume: {
        value: "19,000",
        isUp: true,
        percentage: "4.03",
      },
      earned: {
        value: "323.84",
        isUp: false,
        percentage: "5.92"
      },
      comcut: "20",
      lastUpdated: "20 Feb 2023"
    },
    {
      name: "Anish",
      volume: {
        value: "19,000",
        isUp: true,
        percentage: "4.03",
      },
      earned: {
        value: "323.84",
        isUp: true,
        percentage: "5.92"
      },
      comcut: "20",
      lastUpdated: "20 Feb 2023"
    },
    {
      name: "Anish",
      volume: {
        value: "19,000",
        isUp: false,
        percentage: "4.03",
      },
      earned: {
        value: "323.84",
        isUp: false,
        percentage: "5.92"
      },
      comcut: "20",
      lastUpdated: "20 Feb 2023"
    }
  ]
  return (
    <React.Fragment>
      <Head>
        <title>freqtradebot</title>
      </Head>
      <div className='my-3 px-3'>
        <div className='max-w-[1296px] w-full px-6 py-6 border border-gray-600 mx-auto flex justify-between rounded-md'>
          <div>
            <h4 className='font-[700] mb-1 text-[16px] leading-[150%] text-[#6C757D]'>Total Volume</h4>
            <div className='flex gap-1'>
              <h1 className='leading-[120%] text-[24px] font-[500]'>${volume}</h1>
              <div className='flex items-center'>
                <Greenup />
                <p className='text-[#198754] leading-[150%] text-[16px]'>2%</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className='font-[700] mb-1 text-[16px] leading-[150%] text-[#6C757D]'>Profit Gained</h4>
            <div className='flex gap-1'>
              <h1 className='leading-[120%] text-[24px] font-[500]'>${profitGained}</h1>
              <div className='flex items-center'>
                <RedDown />
                <p className='text-[#DC3545] leading-[150%] text-[16px]'>-2%</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className='font-[700] mb-1 text-[16px] leading-[150%] text-[#6C757D]'>Profit Gained</h4>
            <div className='flex gap-1'>
              <h1 className='leading-[120%] text-[24px] font-[500]'>${eth}</h1>
              <div className='flex items-center'>
                <RedDown />
                <p className='text-[#DC3545] leading-[150%] text-[16px]'>-2%</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className='font-[700] mb-1 text-[16px] leading-[150%] text-[#6C757D]'>Profit Gained</h4>
            <div className='flex gap-1'>
              <h1 className='leading-[120%] text-[24px] font-[500]'>${btc}</h1>
              <div className='flex items-center'>
                <RedDown />
                <p className='text-[#DC3545] leading-[150%] text-[16px]'>-2%</p>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-[1296px] w-full mx-auto flex justify-between py-6'>
          <div className='flex gap-6  px-3  items-center'>
            <h1 className='font-[500] text-[24px] leading-[120%]'>{distributors} Distributors</h1>
            <button className='bg-[#0D6EFD] rounded-[4px] border border-[#0D6EFD] py-2 px-3'>+ Add Distributor</button>
          </div>
          <div className="flex border-[#495057] border items-center rounded-md  bg-[#343A40] px-4 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2 text-[#6C757D]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent placeholder:text-[#6C757D] focus:outline-none"
            />
            <button className="text-gray-500 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#F8F9FA]">
                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <div class="mx-auto max-w-[1296px] border border-gray-600 rounded-md overflow-hidden">
          {/* <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div class="w-full md:w-1/2">
                  <form class="flex items-center">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="" />
                    </div>
                  </form>
                </div>
                <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                  <button type="button" class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                    <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                    </svg>
                    Add product
                  </button>
                  <div class="flex items-center space-x-3 w-full md:w-auto">
                    <button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown" class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                      <svg class="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                      Actions
                    </button>
                    <div id="actionsDropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionsDropdownButton">
                        <li>
                          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mass Edit</a>
                        </li>
                      </ul>
                      <div class="py-1">
                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete all</a>
                      </div>
                    </div>
                    <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-4 w-4 mr-2 text-gray-400" viewbox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
                      </svg>
                      Filter
                      <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </button>
                    <div id="filterDropdown" class="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                      <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose brand</h6>
                      <ul class="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                        <li class="flex items-center">
                          <input id="apple" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Apple (56)</label>
                        </li>
                        <li class="flex items-center">
                          <input id="fitbit" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label for="fitbit" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Microsoft (16)</label>
                        </li>
                        <li class="flex items-center">
                          <input id="razor" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label for="razor" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Razor (49)</label>
                        </li>
                        <li class="flex items-center">
                          <input id="nikon" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label for="nikon" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Nikon (12)</label>
                        </li>
                        <li class="flex items-center">
                          <input id="benq" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label for="benq" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">BenQ (74)</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> */}
          <div class="overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-4 py-3">Name</th>
                  <th scope="col" class="px-4 py-3">Volume</th>
                  <th scope="col" class="px-4 py-3">Earned</th>
                  <th scope="col" class="px-4 py-3">ComCut</th>
                  <th scope="col" class="px-4 py-3">last updated</th>
                  <th scope="col" class="px-4 py-3">
                    <span class="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return <TableRow key={index} data={item} />
                })}
              </tbody>
            </table>
          </div>
          {/* <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing
              <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
              of
              <span class="font-semibold text-gray-900 dark:text-white">1000</span>
            </span>
            <ul class="inline-flex items-stretch -space-x-px">
              <li>
                <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span class="sr-only">Previous</span>
                  <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
              </li>
              <li>
                <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
              </li>
              <li>
                <a href="#" aria-current="page" class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
              </li>
              <li>
                <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
              </li>
              <li>
                <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
              </li>
              <li>
                <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span class="sr-only">Next</span>
                  <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
