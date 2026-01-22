"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
export default function SortProducts() {
   const searchParams = useSearchParams();
   const [count, setCount] = useState(0);
   function updateSorting(sortOrder) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("sort", sortOrder);
      window.history.pushState(null, "", `?${params.toString()}`);
   }
   

   return (
      <>
         <button onClick={() => updateSorting("asc")}>Sort Ascending</button>
         <button onClick={() => updateSorting("desc")}>Sort Descending</button>

         <button
            onClick={() => setCount(count + 1)}
            className="border-2 px-32 py-3 rounded-3xl bg-blue-400 hover:bg-blue-900 delay-100"
         >
            ADD
         </button>
         <h1 className="text-9xl font-extrabold">{count}</h1>

         <div>
            <button
               onClick={() => setCount(count - 1)}
               className="border-2 px-32 py-3 rounded-3xl bg-red-900 hover:bg-red-900 delay-100"
            >
               SUBTRACT
            </button>
         </div>

         <div className="flex flex-col items-center my-12">
            <h1>------------------------------------------------------</h1>
            <h1 className="font-semibold text-3xl text-lime-200">Calculator</h1>
            <h1>---------------------------------------------------------</h1>

            <div className="border  max-w-96 p-12 rounded-lg border-gray-700">
               <input
                  className="bg-white border-2 rounded-lg mb-5 border-gray-400 text-gray-900 w-full text-2xl py-2 px-2"
                  type="text"
               />
               <div className="flex p-2 justify-between">
                  <button
                     className="p-4 rounded-xl bg-gray-400 text-2xl font-bold border-2 transition-transform duration-150
         active:scale-95 "
                  >
                     +
                  </button>
                  <button
                     className="p-4 rounded-xl bg-gray-400 text-2xl font-bold border-2 transition-transform duration-150
         active:scale-95"
                  >
                     -
                  </button>
                  <button
                     className="p-4 rounded-xl bg-gray-400 text-2xl font-bold border-2 transition-transform duration-150
         active:scale-95"
                  >
                     x
                  </button>
                  <button
                     className="p-4 rounded-xl bg-gray-400 text-2xl font-bold border-2 transition-transform duration-150
         active:scale-95"
                  >
                     /
                  </button>
               </div>
               <div className="flex p-2 justify-between ">
                  <button
                     className="p-4 rounded-xl bg-gray-400 text-2xl font-bold border-2 transition-transform duration-150
         active:scale-95"
                  >
                     1
                  </button>
                  <button
                     className="p-4 rounded-xl bg-gray-400 text-2xl font-bold border-2 transition-transform duration-150
         active:scale-95"
                  >
                     2
                  </button>
                  <button
                     className="p-4 rounded-xl bg-gray-400 text-2xl font-bold border-2 transition-transform duration-150
         active:scale-95"
                  >
                     3
                  </button>
                  <button
                     className="p-4 rounded-xl bg-gray-400 text-2xl font-bold border-2 transition-transform duration-150
         active:scale-95"
                  >
                     4
                  </button>
               </div>
               <div className="flex p-2 justify-between ">
                  <button
                     className="p-4 rounded-xl bg-gray-400 text-2xl font-bold border-2 transition-transform duration-150
         active:scale-95"
                  >
                     5
                  </button>
                  <button
                     className="p-4 rounded-xl bg-gray-400 text-2xl font-bold border-2 transition-transform duration-150
         active:scale-95"
                  >
                     6
                  </button>
                  <button
                     className="p-4 rounded-xl bg-gray-400 text-2xl font-bold border-2 transition-transform duration-150
         active:scale-95"
                  >
                     7
                  </button>
                  <button
                     className="p-4 rounded-xl bg-gray-400 text-2xl font-bold border-2 transition-transform duration-150
         active:scale-95"
                  >
                     8
                  </button>
               </div>
               <div className="flex p-2 justify-between ">
                  <button
                     className="p-4 rounded-xl bg-gray-400 text-2xl font-bold border-2 transition-transform duration-150
         active:scale-95"
                  >
                     9
                  </button>
                  <button
                     className="p-4 rounded-xl bg-gray-400 text-2xl font-bold border-2 transition-transform duration-150
         active:scale-95"
                  >
                     0
                  </button>
                  <button
                     className="p-4 rounded-xl bg-red-400 text-2xl font-bold border-2 transition-transform duration-150
         active:scale-95"
                  >
                     C
                  </button>
                  <button
                     className="p-4 rounded-xl bg-gray-400 text-2xl font-bold border-2 transition-transform duration-150
         active:scale-95"
                  >
                     Ok
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}
