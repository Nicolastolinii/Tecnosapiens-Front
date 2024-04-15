import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './screen/Home';
import { LoginScreen } from './screen/LoginScreen';
import { PostCreator } from './screen/PostCreator';
import { AuthProvider, useAuth } from './utils/AuthProvider';
import { PostPage } from './screen/PostPage';
import { Filter } from './screen/Filter';
import { Analytics } from "@vercel/analytics/react"
import { TermConditions } from './screen/TermConditions';
import { Footer } from './Footer';
import { RegisterScreen } from './screen/RegisterScreen';
import { ProfileScreen } from './screen/ProfileScreen';
// Componente de protección de ruta
const ProtectedRoute = ({ element, ...props }) => {
  const { token } = useAuth();
  return token ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/create" element={<ProtectedRoute element={<PostCreator />} />} />
            <Route path="/profile" element={<ProtectedRoute element={<ProfileScreen />} />} />
            <Route path="/filter" element={<Filter />} />
            <Route path='/blog/:id' element={<PostPage />} />
            <Route path='/terms&conditions' element={<TermConditions />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
      <Analytics />
    </>
  );
}

export default App;