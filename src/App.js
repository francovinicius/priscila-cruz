import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from './Components/Banner'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Banner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
