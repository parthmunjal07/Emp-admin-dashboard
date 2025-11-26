import React from "react";
import Header from "../other/Header";
import Createtask from "../other/Createtask";
import AllTask from "../other/AllTask";

function AdminDashboard() {
  return (
    <div className="h-screen w-full p-10">
      <Header />
      <Createtask />
      <AllTask />
    </div>
  );
}

export default AdminDashboard;
