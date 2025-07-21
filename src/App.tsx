
import React from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import AuthPage from './pages/AuthPage';
import Dashboard from './components/Dashboard';
import PWABadge from './PWABadge';
import './App.css';

const AppContent: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="App">
      {user ? <Dashboard /> : <AuthPage />}
      <PWABadge />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
