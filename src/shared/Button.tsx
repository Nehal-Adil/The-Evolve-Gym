import type React from "react";
import { SelectedPageEnum, type SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
  targetPage: SelectedPage;
  className?: string;
};

function Button({ children, setSelectedPage, targetPage, className }: Props) {
  return (
    <a
      className={`rounded-md transition duration-300 ${className}`}
      href={`#${targetPage}`}
      onClick={() => setSelectedPage(targetPage)}
    >
      {children}
    </a>
  );
}
export default Button;
