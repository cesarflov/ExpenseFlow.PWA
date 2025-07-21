
import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const AuthPage: React.FC = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const switchToRegister = () => setIsLoginMode(false);
  const switchToLogin = () => setIsLoginMode(true);

  return (
    <div className="auth-page">
      {isLoginMode ? (
        <LoginForm onSwitchToRegister={switchToRegister} />
      ) : (
        <RegisterForm onSwitchToLogin={switchToLogin} />
      )}
    </div>
  );
};

export default AuthPage;
