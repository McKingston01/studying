import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import HomeView from './pages/HomeView';
import { AuthProvider } from './context/AuthContext';
import RegisterFormView from './pages/RegisterFormView';
import UserDashboardView from './pages/UserDashboardView';
import LoginFormView from './pages/LoginFormView';
import AlertProvider from './context/AlertContext';
import AdminArticleView from './pages/AdminArticleView';
import FloatButtonWhatsapp from './components/FloatButtonWhatsapp';

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/perfil" />;
}

function App() {
  return (
    <div>
      <FloatButtonWhatsapp />
      <AlertProvider>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/register" element={<RegisterFormView />} />
              <Route path="/dashboard" element={<ProtectedRoute><UserDashboardView /></ProtectedRoute>} />
              <Route path="/admin-article" element={<ProtectedRoute><AdminArticleView /></ProtectedRoute>} />
              <Route path="/perfil" element={<LoginFormView />} />
            </Routes>
          </Router>
        </AuthProvider>
      </AlertProvider>
    </div>
  );
}

export default App;