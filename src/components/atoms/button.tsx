import React from "react";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  leftIcon?: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
  leftIcon,
}) => {
  return (
    <div onClick={onClick} className={`${className}`}>
      {leftIcon} {label}
    </div>
  );
};
export default Button;
