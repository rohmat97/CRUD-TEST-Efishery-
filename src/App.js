import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Background from "./Background";
import Layout from "./components/Layout/Layout";
import AddComodity from "./pages/AddComodity";
import EditComodity from "./pages/EditComodity";
import Home from "./pages/Home";
import { ThemeProvider } from "./ThemeContext";
import Toggle from "./ThemeToggle";

function App() {
  const [size, setsize] = useState({
    width: undefined,
    height: undefined
  })
  const [editData, seteditData] = useState()
  useEffect(() => {
    const handleResize = () => {
      setsize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <Layout>
     <ThemeProvider>
      <Background>
          <div className={size.width < 800 ?"absolute right-0 md:mr-6 md:mt-6":"absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6"}>
            <Toggle />
          </div>
          <Routes>
              <Route path="/crud-test-efishery/" element={<Home seteditData={seteditData} editData={editData} />} />
              <Route path="/crud-test-efishery/Add" element={<AddComodity />} />
              <Route path="/crud-test-efishery/Edit" element={<EditComodity editData={editData} />} />
          </Routes>
        </Background>
      </ThemeProvider>
    </Layout>
  );
}

export default App;
