// Import
import { Routes, Route } from "react-router-dom";
// Styles
import "./Styles/index.css";
// Component
import { Home, SimplifyingFractions } from "./Pages";

const App = () => {
  return (
    <main className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path='/SimplifyingFractions' element={<SimplifyingFractions />} />
        {/* <Route path='/CancelarCita' element={<CancelForm />} /> */}
      </Routes>
    </main>
  );
};

export default App;
