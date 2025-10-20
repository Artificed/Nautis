import "./app.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./common/routes/app-routes";

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App