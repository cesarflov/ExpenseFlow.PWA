
import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to Expense Flow</h1>
        <div className="user-info">
          <span>Hello, {user?.username || user?.email}!</span>
          <button onClick={logout} className="logout-button">
            Logout
          </button>
        </div>
      </header>
      <main className="dashboard-content">
        <p>You are successfully logged in!</p>
        {/* Add your expense tracking features here */}
      </main>
    </div>
  );
};

export default Dashboard;
