import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Layouts
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

//Pages
import HomePage from "./pages/HomePage";
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar /> {/* แสดง NavBar ทุกหน้า */}
      <div>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* หน้าแรก */}

        {/* หน้าที่ไม่มีในระบบ */}
        <Route path="*" element={<NotFoundPage />} /> {/* 404 - Page Not Found */}
      </Routes>
      </div>
      <Footer /> {/* แสดง Footer ทุกหน้า */}
    </Router>
  );
};

export default App;