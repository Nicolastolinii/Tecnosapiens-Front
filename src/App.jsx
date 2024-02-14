import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './screen/Home';
import { LoginScreen } from './screen/LoginScreen';
import { PostCreator } from './screen/PostCreator';
import { AuthProvider, useAuth } from './utils/AuthProvider';

// Componente de protección de ruta
const ProtectedRoute = ({ element, ...props }) => {
  const { token } = useAuth();
  return token ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginScreen />} />
          {/* Utiliza el componente de protección de ruta para la ruta /create */}
          <Route path="/create" element={<ProtectedRoute element={<PostCreator />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;