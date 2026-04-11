import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

export default function Button({ children, className = "", ...props }: ButtonProps) {
    return (
        <button
            className={`rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
