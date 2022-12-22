import { useState } from "react";

interface Options {
  panel: string;
  setPanel: Function;
}

export default function SideBar(options: Options) {
  const [collapsed, setCollapsed] = useState(false);

  const adjustSideBar = () => {
    setCollapsed((prev) => !prev);
  };

  if (collapsed) {
    return (
      <div id="sidebar" className="collapsed bg-indigo-100">
        <button
          id="collapse"
          onClick={() => {
            adjustSideBar();
          }}
        ></button>
      </div>
    );
  }

  return (
    <div id="sidebar" className="bg-indigo-100">
      <h1 className="text-3xl font-bold font-serif">Samsung USP</h1>
      <ul>
        <li
          onClick={() => {
            options.setPanel("KAI");
          }}
        >
          Knox Asset Intelligence
        </li>
        <li
          onClick={() => {
            options.setPanel("KC");
          }}
        >
          Knox Configure
        </li>
        <li
          onClick={() => {
            options.setPanel("KFM");
          }}
        >
          KFM
        </li>
      </ul>
      <button
        id="collapse"
        onClick={() => {
          adjustSideBar();
        }}
      ></button>
      <div className="inline-flex">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
          Profiles
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
          Settings
        </button>
      </div>
    </div>
  );
}
