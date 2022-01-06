import React from "react";

interface ButtonProps {
  placeholder?: string;
  onClick?: () => void;
  className?: string;
  leftIcon?: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  placeholder,
  onClick,
  className,
  leftIcon,
}) => {
  return (
    <div onClick={onClick} className={`${className}`}>
      {leftIcon} {placeholder}
    </div>
  );
};
export default Button;
