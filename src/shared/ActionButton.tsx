import type React from "react";
import { SelectedPageEnum, type SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

function ActionButton({ children, setSelectedPage }: Props) {
  return (
    <a
      className="bg-secondary-500 hover:bg-primary-500 rounded-md px-10 py-2 text-white"
      href={`#${SelectedPageEnum.ContactUs}`}
      onClick={() => setSelectedPage(SelectedPageEnum.ContactUs)}
    >
      {children}
    </a>
  );
}

export default ActionButton;
