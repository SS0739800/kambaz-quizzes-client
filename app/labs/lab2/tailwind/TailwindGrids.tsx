export default function TailwindGrids() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Tailwind Grids</h2>
      <div>
        <h3 className="mt-6 text-lg font-bold">4 Columns Grid</h3>
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 9 }, (_, i) => (
            <div key={i} className="text-center bg-blue-300 p-3">
              {String(i + 1).padStart(2, "0")}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mt-6 text-lg font-bold">3 Columns Grid</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center bg-blue-300 p-3">01</div>
          <div className="text-center bg-blue-300 p-3">02</div>
          <div className="text-center bg-blue-300 p-3">03</div>
          <div className="col-span-2 text-center bg-blue-300 p-3">04</div>
          <div className="text-center bg-blue-300 p-3">05</div>
          <div className="text-center bg-blue-300 p-3">06</div>
          <div className="col-span-2 text-center bg-blue-300 p-3">07</div>
        </div>
      </div>
      <div id="wd-tailwind-grid-system" className="mt-6">
        <h2 className="text-2xl font-bold">Grid system</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-red-500 text-white">
            <h3 className="text-lg font-bold">Left half</h3>
          </div>
          <div className="bg-blue-500 text-white">
            <h3 className="text-lg font-bold">Right half</h3>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 mt-2">
          <div className="col-span-4 bg-yellow-500">
            <h3 className="text-lg font-bold">One third</h3>
          </div>
          <div className="col-span-8 bg-green-500 text-white">
            <h3 className="text-lg font-bold">Two thirds</h3>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 mt-2">
          <div className="col-span-2 bg-black text-white">
            <h3 className="text-lg font-bold">Sidebar</h3>
          </div>
          <div className="col-span-8 bg-gray-500 text-white">
            <h3 className="text-lg font-bold">Main content</h3>
          </div>
          <div className="col-span-2 bg-blue-400">
            <h3 className="text-lg font-bold">Sidebar</h3>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 mt-2">
          <div className="col-span-4 bg-orange-400">
            <h3 className="text-lg font-bold">First</h3>
          </div>
          <div className="col-span-4 bg-teal-500 text-white">
            <h3 className="text-lg font-bold">Second</h3>
          </div>
          <div className="col-span-4 bg-pink-400">
            <h3 className="text-lg font-bold">Third</h3>
          </div>
        </div>
        <div id="wd-ai-grid" className="grid grid-cols-12 gap-2 mt-2">
          <div className="col-span-3 bg-purple-500 text-white">
            <h3 className="text-lg font-bold">Three</h3>
          </div>
          <div className="col-span-9 bg-lime-400">
            <h3 className="text-lg font-bold">Nine</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
