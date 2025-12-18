"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex flex-col gap-4 items-center mt-[20%]">
      <button
        onClick={() => setCount((prevCount) => prevCount + 1)}
        className="p-4 text-xl text-white bg-blue-600"
      >
        + Incrementar
      </button>

      {count > 0 && <output>{count}</output>}
    </div>
  );
}
