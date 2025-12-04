import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import "./App.css"
import Wrapper from "./layouts/Wrapper"

function App() {
  return (
    <>
      <Routes>
        <Route element={<Wrapper />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
      {/* <Home /> */}
    </>
  )
}

export default App
