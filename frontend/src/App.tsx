import "./app.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./lib/router/app-routes";

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
