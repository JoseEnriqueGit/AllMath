// Import
import { Routes, Route } from "react-router-dom";
// Styles
import "./Styles/index.css";
// Component
import { Home, SimplifyingFractions } from "./Pages";

const App = (): JSX.Element => {
  return (
    <main className="flex justify-center items-center flex-col min-h-screen w-full">
      <article className="flex justify-center items-center flex-col max-w-900 w-full p-6">
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/SimplifyingFractions"
            element={<SimplifyingFractions />}
          />
        </Routes>
      </article>
    </main>
  );
};

export default App;
