import React from 'react';
import './Button.css';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'light';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  showArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
  showArrow = false,
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
    >
      <span>{children}</span>
      {showArrow && <ArrowRight className="btn-arrow" size={18} />}
    </button>
  );
};

export default Button;
