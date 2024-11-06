import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useToken from "./hooks/useToken";
import Navbar from './components/Navbar';

function App() {
  const [token] = useToken();

  console.log(token, "test");
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={!token.token ? <Link to={"/auth"}/>: <Home />} /> */}
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
