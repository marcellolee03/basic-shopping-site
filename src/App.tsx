import { Route, Routes } from "react-router-dom"
import { routes } from "./routes"
import { BrowseProductsPage } from "./pages/BrowseProductsPage"
import { NavBar } from "./components/NavBar"

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="/products/gaskets" element={<BrowseProductsPage productCategory={"gasket"}/>} />
      </Routes>
    </>
  )
}

export default App
