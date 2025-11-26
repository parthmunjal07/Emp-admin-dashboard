import React from "react";

function Tasklist() {
  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto w-full py-5 justify-start rounded-2xl flex gap-5 mt-10"
    >
      <div className="h-full w-[300px] bg-red-400 p-5 flex-shink-0 rounded-xl">
        <div className="flex justify-between items-center">
            <h3 className="px-3 py-1 rounded bg-red-600 text-sm">High</h3>
          <h4 className="text-sm">14 Nov 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a instagram reel</h2>
        <p className="text-sm mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam non earum iusto! Perferendis odit fuga enim doloremque iusto, nulla eos?</p>
      </div>
      <div className="h-full w-[300px] bg-blue-400 p-5 flex-shink-0 rounded-xl">
        <div className="flex justify-between items-center">
            <h3 className="px-3 py-1 rounded bg-red-600 text-sm">High</h3>
          <h4 className="text-sm">14 Nov 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a instagram reel</h2>
        <p className="text-sm mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam non earum iusto! Perferendis odit fuga enim doloremque iusto, nulla eos?</p>
      </div>
      <div className="h-full w-[300px] bg-green-400 p-5 flex-shink-0 rounded-xl">
        <div className="flex justify-between items-center">
            <h3 className="px-3 py-1 rounded bg-red-600 text-sm">High</h3>
          <h4 className="text-sm">14 Nov 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a instagram reel</h2>
        <p className="text-sm mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam non earum iusto! Perferendis odit fuga enim doloremque iusto, nulla eos?</p>
      </div>
      <div className="h-full w-[300px] bg-yellow-400 p-5 flex-shink-0 rounded-xl">
        <div className="flex justify-between items-center">
            <h3 className="px-3 py-1 rounded bg-red-600 text-sm">High</h3>
          <h4 className="text-sm">14 Nov 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a instagram reel</h2>
        <p className="text-sm mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam non earum iusto! Perferendis odit fuga enim doloremque iusto, nulla eos?</p>
      </div>
    </div>
  );
}

export default Tasklist;
