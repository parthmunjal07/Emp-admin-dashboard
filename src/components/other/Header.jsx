import React, { useDebugValue } from "react";
import TaskListNos from "./TaskListNos";

function Header() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-serif">
          Hello, <br /> <span className="text-3xl font-semibold ">Parth✌️</span>
        </h1>
        <button className="bg-red-500 text-white rounded-xl text-xl font-serif p-4">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Header;
