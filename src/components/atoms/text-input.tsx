import React from "react";

interface TextInput {
  label?: string;
  value: any;
  onChange: (event: any) => void;
  placeholder?: string;
  type?: "text" | "email" | "password";
  className?: string;
  required?: boolean;
}
const TextInput: React.FC<TextInput> = ({
  label,
  value,
  onChange,
  placeholder,
  type,
  className,
  required,
}) => {
  return (
    <>
      <label>{label}</label>
      <input
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        className={className}
      />
    </>
  );
};
export default TextInput;
