import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail"; // ✅ Import
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import HSE from "./pages/HSE";
import Careers from "./pages/Careers";
import Register from "./pages/Register";
import Loader from "./components/Loader";
import SmoothScroll from "./components/SmoothScroll";


export default function App() {

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 sec
    return () => clearTimeout(timer);
  }, []);


  return loading ? <Loader /> : (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <SmoothScroll>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} /> {/* ✅ New route */}
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/hse" element={<HSE />} />              {/* ✅ HSE Page */}
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="/register" element={<Register />} />
            
             {/* ✅ Protect /admin route */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

          
          </Routes>
        </main>
        <Footer />
        </SmoothScroll>
      </div>
    </BrowserRouter>
  );
}

