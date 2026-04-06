import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}

export const Container = ({ children, className = "", wide = false }: ContainerProps) => {
  return (
    <div
      className={`mx-auto px-4 sm:px-6 lg:px-8 w-full ${
        wide ? "max-w-[1440px]" : "max-w-7xl"
      } ${className}`}
    >
      {children}
    </div>
  );
};
