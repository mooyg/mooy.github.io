import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "bg-ui-button-neutral hover:bg-ui-button-neutral-hover p-2 rounded-md delay-75 transition",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
