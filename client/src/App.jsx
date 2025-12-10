import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import "./App.css"
import Wrapper from "./layouts/Wrapper"
import Employee from "./pages/Employee"

function App() {
  return (
    <>
      <Routes>
        <Route element={<Wrapper />}>
          <Route path="/" element={<Home />} />

          {/* employee */}
          <Route path="/employee" element={<Employee />} />
        </Route>
      </Routes>
      {/* <Home /> */}
    </>
  )
}

export default App
