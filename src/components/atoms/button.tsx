import React from "react";

interface ButtonProps {
  children?: string;
  onClick?: () => void;
  className?: string;
  leftIcon?: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  leftIcon,
}) => {
  return (
    <div onClick={onClick} className={`${className} cursor-pointer`}>
      {leftIcon} {children}
    </div>
  );
};
export default Button;
