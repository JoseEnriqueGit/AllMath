import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p className="">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
