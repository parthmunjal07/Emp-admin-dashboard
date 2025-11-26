import React from 'react'

function Createtask() {
    return (
        <div className="mt-7 p-5 bg-[#1C1C1C] rounded">
        <form className="flex flex-wrap w-full items-start justify-between ">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm mb-0.5 text-gray-300">Task Title</h3>
              <input className="text-sm py-1 px-2 w-4/5 outline-none bg-transparent rounded border border-gray-400 mb-4" type="text" placeholder="Enter Task to Assign" />
            </div>
            <div>
              <h3 className="text-sm mb-0.5 text-gray-300">Date</h3>
              <input className="text-sm py-1 px-2 w-4/5 outline-none bg-transparent rounded border border-gray-400 mb-4" type="date" name="" id="" />
            </div>
            <div>
              <h3 className="text-sm mb-0.5 text-gray-300">Assign to:</h3>
              <input className="text-sm py-1 px-2 w-4/5 outline-none bg-transparent rounded border border-gray-400 mb-4" type="text" placeholder="Enter Employee Name" />
            </div>
            <div>
              <h3 className="text-sm mb-0.5 text-gray-300">Category</h3>
              <input className="text-sm py-1 px-2 w-4/5 outline-none bg-transparent rounded border border-gray-400 mb-4" type="text" placeholder="Web, design, backend, etc.." />
            </div>
          </div>
          <div className="w-1/2">
            <h3 className="text-sm mb-0.5 text-gray-300">Description</h3>
            <textarea className="text-sm py-1 px-2 w-4/5 outline-none bg-transparent rounded border border-gray-400 mb-4" name="" id="" cols={30} rows={10}></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
          </div>
        </form>
      </div>
    
    )
}

export default Createtask
