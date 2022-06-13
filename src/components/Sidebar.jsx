import React from "react";
import { filters } from "../filters";
import { InputComp } from "./InputComp";

export const Sidebar = ({ checkBoxHandler, filtersArr, ClearFilter }) => {
  return (
    <aside class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 w-52">
      <ul class="space-y-2">
        <div className="flex">
          <li class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <span class="ml-3 cursor-pointer">Filters</span>
          </li>
          <li class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <span class="ml-3 cursor-pointer p-2" onClick={ClearFilter}>
              Clear
            </span>
          </li>
        </div>

        <li>
          <button
            type="button"
            class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-example"
            data-collapse-toggle="dropdown-example"
          >
            <span
              class="flex-1 ml-3 text-left whitespace-nowrap"
              sidebar-toggle-item=""
            >
              Brands
            </span>
          </button>
          <ul id="" class="py-2 space-y-2 ml-4">
            {filters
              .filter((filt) => filt.filterType === "brands")
              .map((data) => {
                return (
                  <InputComp
                    data={data}
                    filtersArr={filtersArr}
                    checkBoxHandler={checkBoxHandler}
                  />
                );
              })}
          </ul>
        </li>
        <li>
          <button
            type="button"
            class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-example"
            data-collapse-toggle="dropdown-example"
          >
            <span
              class="flex-1 ml-3 text-left whitespace-nowrap"
              sidebar-toggle-item=""
            >
              CPU Type
            </span>
          </button>
          <ul id="" class="py-2 space-y-2 ml-4">
            {filters
              .filter((filt) => filt.filterType === "cpu")
              .map((data) => {
                return (
                  <InputComp
                    data={data}
                    filtersArr={filtersArr}
                    checkBoxHandler={checkBoxHandler}
                  />
                );
              })}
          </ul>
        </li>
        <li>
          <button
            type="button"
            class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-example"
            data-collapse-toggle="dropdown-example"
          >
            <span
              class="flex-1 ml-3 text-left whitespace-nowrap"
              sidebar-toggle-item=""
            >
              RAM SIZE
            </span>
          </button>
          <ul id="" class="py-2 space-y-2 ml-4">
            {filters
              .filter((filt) => filt.filterType === "ram")
              .map((data) => {
                return (
                  <InputComp
                    data={data}
                    filtersArr={filtersArr}
                    checkBoxHandler={checkBoxHandler}
                  />
                );
              })}
          </ul>
        </li>
      </ul>
    </aside>
  );
};