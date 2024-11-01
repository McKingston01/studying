import { BrowserRouter,Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import HomeView from './pages/HomeView';
import { AuthProvider } from './context/AuthContext';
import RegisterFormView from './pages/RegisterFormView';
import UserDashboardView from './pages/UserDashboardView';
import LoginFormView from './pages/LoginFormView';
import AlertProvider from './context/AlertContext';
import AdminArticleView from './pages/AdminArticleView';
import FloatButtonWhatsapp from './components/FloatButtonWhatsapp';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutusView from './pages/AboutusView';
import CommunityView from './pages/CommunityView';
import CoursesView from './pages/CoursesView';

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/perfil" />;
}

function App() {
  return (
    <>
      <BrowserRouter>
      <FloatButtonWhatsapp />
      <AlertProvider>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/register" element={<RegisterFormView />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <UserDashboardView />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-article"
              element={
                <ProtectedRoute>
                  <AdminArticleView />
                </ProtectedRoute>
              }
            />
            <Route path="/perfil" element={<LoginFormView />} />
            <Route path="/aboutus" element={<AboutusView />} />
            <Route path="/community" element={<CommunityView />} />
            <Route path="/courses" element={<CoursesView />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </AlertProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
