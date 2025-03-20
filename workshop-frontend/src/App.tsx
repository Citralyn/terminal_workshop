import { Route, Routes, HashRouter } from "react-router";
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
