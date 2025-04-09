import { Routes, Route } from "react-router-dom";
import AddDevice from "./pages/AddDevice";
import DeviceOptions from "./pages/DeviceOptions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AddDevice />} />
      <Route path="/device-options/:deviceName" element={<DeviceOptions />} />
    </Routes>
  );
}

export default App;
