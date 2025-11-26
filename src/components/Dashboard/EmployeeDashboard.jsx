import React from "react";
import Header from "../other/Header";
import TaskListNos from "../other/TaskListNos";
import Tasklist from "../Tasklist/Tasklist";

function EmployeeDashboard() {
  return (
    <div className="p-4 mx-2 bg-[#1C1C1C] h-screen">
      <Header />
      <TaskListNos />
      <Tasklist />
    </div>
  );
}

export default EmployeeDashboard;
