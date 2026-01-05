import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "py-4 px-8 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white shadow-green-500/30",
    secondary: "bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};