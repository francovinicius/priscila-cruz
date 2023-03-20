import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from './Components/Banner'
import About from './Components/About'
import Links from './Components/Links'
import Form from './Components/Form'
import Footer from "./Components/Rodape";

function App() {
  return (
    <BrowserRouter>

    <Banner />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/links" element={<Links />} />
        <Route path="/contato" element={<Form />} />
      </Routes>

    <Footer />
    </BrowserRouter>
  );
}

export default App;
