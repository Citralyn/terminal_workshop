import { Route, Routes, HashRouter } from "react-router";
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
          </Route>

          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
