import { useState } from "react";
import { submitReset } from "./api";
import { MdClose, MdSend } from "react-icons/md";

export default function BigRedButton() {
  const [formMode, setFormMode] = useState(false);

  return (
    <div className="mt-8 mb-6">
      {formMode ? (
        <div className="flex flex-row border border-white rounded-lg">
          <input
            type="text"
            name=""
            id="reason"
            className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-800 p-2 rounded-l-lg"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const input = document.getElementById(
                  "reason"
                ) as HTMLInputElement;
                submitReset(input.value);
                setFormMode(false);
              }
            }}
          />
          <div className="flex flex-col">
            <button
              className="p-2 bg-green-500 hover:bg-green-600 active:bg-green-500 rounded-tr-lg"
              onClick={() => {
                const input = document.getElementById(
                  "reason"
                ) as HTMLInputElement;
                submitReset(input.value);
                setFormMode(false);
              }}
            >
              <MdSend size="1.5em" />
            </button>
            <button
              className="p-2 bg-red-500 hover:bg-red-600 active:bg-red-500 rounded-br-lg"
              onClick={() => {
                setFormMode(false);
              }}
            >
              <MdClose size="1.5em" />
            </button>
          </div>
        </div>
      ) : (
        <button
          className="p-8 text-white text-4xl bg-red-500 hover:bg-red-700 rounded-2xl"
          onClick={() => setFormMode(true)}
        >
          Oops he did it again.
        </button>
      )}
    </div>
  );
}
