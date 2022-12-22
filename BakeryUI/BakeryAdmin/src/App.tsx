import { useState } from "react";
import "./App.css";
import SideBar from "./components/sidebar";
import Content from "./components/content";

function App() {
  const [contentToRender, setContenttoRender] = useState("Menu");

  return (
    <div className="App">
      <SideBar panel={contentToRender} setPanel={setContenttoRender} />
      <Content contentToRender={contentToRender} />
    </div>
  );
}

export default App;
//
