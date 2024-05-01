import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/Routes";
import { Footer } from "./components/dashboard/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
