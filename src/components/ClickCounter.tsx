import { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>
        Count:&nbsp; <span>{count}</span>
      </h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export { };
export { ClickCounter };