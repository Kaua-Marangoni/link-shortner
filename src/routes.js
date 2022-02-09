import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Links from "./pages/Links"
import Error404 from "./pages/Error404"

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/links" element={ <Links /> } />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp