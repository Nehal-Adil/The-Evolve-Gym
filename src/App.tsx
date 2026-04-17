import {
  Navbar,
  Home,
  Benefits,
  Classes,
  ContactUs,
  Evolve,
  Footer,
} from "@/screens";
import { useEffect, useState } from "react";
import { SelectedPageEnum, type SelectedPage } from "./shared/types";
import RollingRibbon from "@/shared/RollingRibbon";

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPageEnum.Home,
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPageEnum.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Home setSelectedPage={setSelectedPage} />

      <Evolve setSelectedPage={setSelectedPage} />

      <Benefits setSelectedPage={setSelectedPage} />

      <RollingRibbon />

      <Classes setSelectedPage={setSelectedPage} />

      <ContactUs setSelectedPage={setSelectedPage} />

      <Footer />
    </div>
  );
};

export default App;
