import Navbar from "@/screens/navbar";
import { useState } from "react";
import { SelectedPageEnum, type SelectedPage } from "./shared/types";

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPageEnum.Home,
  );

  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default App;
