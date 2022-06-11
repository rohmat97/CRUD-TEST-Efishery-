import {Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import PageCTA from "./pages/PageCTA";
import PageOne from "./pages/PageOne";
import PageThree from "./pages/PageThree";
import PageTwo from "./pages/PageTwo";
function App() {
  return (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cta" element={<PageCTA />} />
      <Route path="/1" element={<PageOne />} />
      <Route path="/2" element={<PageTwo />} />
      <Route path="/3" element={<PageThree />} />
    </Routes>
  </Layout>
  );
}

export default App;
