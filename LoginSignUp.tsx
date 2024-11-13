import React from 'react';
import Header from './Header';
import LoginForm from './LoginForm';

const LoginSignUp: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col pb-12 mx-auto w-full bg-white max-w-[480px]">
      <Header />
      <LoginForm />
    </div>
  );
};

export default LoginSignUp;
