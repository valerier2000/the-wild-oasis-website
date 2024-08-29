"use client";

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button
        className="bg-primary-800 text-primary-300 px-4 py-2 rounded-sm"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="bg-primary-800 text-primary-300 px-4 py-2 rounded-sm"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>

      <button
        className="bg-primary-800 text-primary-300 px-4 py-2 rounded-sm"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
