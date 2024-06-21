import FormData from "./FormData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DataDisplay from "./DataDisplay";
import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState(null);
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <Router>
        <Routes>
          <Route path="/" element={<FormData setFormData={setFormData} />} />
          <Route
            path="/data-display"
            element={<DataDisplay formData={formData} />}
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
