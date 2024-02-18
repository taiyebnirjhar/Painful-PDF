import { useState } from "react";
import increaseData from "../../helper/increaseData";
import { useAppContext } from "../../hooks/useAppContext.hooks";

export default function UserInput() {
  const { sampleData, setSampleData } = useAppContext();

  const [numToAdd, setNumToAdd] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!numToAdd || numToAdd < 1) {
      alert("Nice Try!");
    } else {
      const newData = increaseData(sampleData, numToAdd);
      setSampleData(newData);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form className="w-[90%] max-w-lg mx-auto" onSubmit={handleSubmit}>
      <label
        htmlFor="DataCount"
        className="mb-2 text-sm font-medium text-gray-900 sr-only "
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
            />
          </svg>
        </div>
        <input
          type="number"
          value={numToAdd}
          onChange={(e) => setNumToAdd(parseInt(e.target.value))}
          onKeyDown={handleKeyDown}
          id="DataCount"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-sky-500 focus:border-sky-500 "
          placeholder="How many row you want to show..."
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        >
          Generate
        </button>
      </div>
    </form>
  );
}
