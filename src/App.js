import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Search from "./components/Search/Search";
import HomePage from "./page/HomePage/HomePage";
import ContactPage from "./page/ContactPage/ContactPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './style.css';


function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className="container-fluid content">
          <div className="row">
            <div className="col-md-8">
              <Search />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </div>
            <Sidebar />
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;
