import React, { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <div className="flex">
      <button>{children}</button>
    </div>
  );
};

export default Button;
