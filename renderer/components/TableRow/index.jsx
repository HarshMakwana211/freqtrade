import Link from "next/link";
import Greenup from "../icons/Greenup";
import RedDown from "../icons/reddown";

const TableRow = ({ data }) => {
  // console.log(data);
  return (
    <tr class="border-b dark:border-gray-700">
      <th
        scope="row"
        class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {data.name}
      </th>
      <td class="px-4 py-3 flex items-center gap-1">
        <h1 className="leading-[150%] text-[#F8F9FA] font-[700] text-[16px]">
          ${data.volume.value}
        </h1>
        <div className="flex items-center">
          {data.volume.isUp ? (
            <>
              <Greenup />
              <p className="text-[#198754] text-[16px] font-[700] leading-[150%]">
                {data.volume.percentage}%
              </p>
            </>
          ) : (
            <>
              <RedDown />
              <p className="text-[#DC3545] text-[16px] font-[700] leading-[150%]">
                {data.volume.percentage}%
              </p>
            </>
          )}
        </div>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-1">
          <h1 className="leading-[150%] text-[#F8F9FA] font-[700] text-[16px]">
            ${data.earned.value}
          </h1>
          <div className="flex items-center">
            {data.earned.isUp ? (
              <>
                <Greenup />
                <p className="text-[#198754] text-[16px] font-[700] leading-[150%]">
                  {data.earned.percentage}%
                </p>
              </>
            ) : (
              <>
                <RedDown />
                <p className="text-[#DC3545] text-[16px] font-[700] leading-[150%]">
                  {data.earned.percentage}%
                </p>
              </>
            )}
          </div>
        </div>
      </td>
      <td class="px-4 py-3 font-[700] text-[16px] leading-[150%] text-[#F8F9FA]">
        {data.comcut}%
      </td>
      <td class="px-4 py-3 font-[400] text-[16px] leading-[150%] text-[#F8F9FA]">
        {data.lastUpdated}
      </td>
      <td class="px-4 py-3 flex items-center justify-end">
        <Link href="/edit">
          <button
            id="apple-imac-27-dropdown-button"
            data-dropdown-toggle="apple-imac-27-dropdown"
            class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
            type="button"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
        </Link>
        <div
          id="apple-imac-27-dropdown"
          class="hidden z-10 w-44 bg-red-800 rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="apple-imac-27-dropdown-button"
          >
            <li>
              <a
                href="#"
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Show
              </a>
            </li>
            <li>
              <Link href="/edit">
                <a
                  href="#"
                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Edit
                </a>
              </Link>
            </li>
          </ul>
          <div class="py-1">
            <a
              href="#"
              class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Delete
            </a>
          </div>
        </div>
      </td>
    </tr>
  );
};
export default TableRow;
