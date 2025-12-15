import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import "./App.css"
import Wrapper from "./layouts/Wrapper"
import Employee from "./pages/Employee"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<Wrapper />}>
          <Route path="/" element={<Dashboard />} />

          {/* employee */}
          <Route path="/employee" element={<Employee />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
