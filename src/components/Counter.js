import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 3);
  };

  const handleDecrement = () => {
    if (count <= 0) return;
    setCount(count - 3);
  };

  return (
    <div className="grid place-items-center pt-10">
      <div className="bg-yellow-200 w-80 rounded-lg h-40 grid justify-center py-5 shadow-lg">
        <h1 className="font-medium text-2xl ">Counter</h1>
        <div className="flex flex-row w-full space-x-6 justify-between items-center">
          <button
            className="text-4xl font-bold cursor-pointer"
            onClick={handleDecrement}
          >
            -
          </button>
          <h2 className="text-4xl font-bold">{count}</h2>
          <button
            className="text-4xl font-bold cursor-pointer"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
