import Navbar from "@/screens/navbar/Navbar";
import { useEffect, useState } from "react";
import { SelectedPageEnum, type SelectedPage } from "./shared/types";
import Footer from "@/screens/footer/footer";
import Home from "@/screens/home/Home";
import Benefits from "@/screens/benefits/Benefits";
import Evolve from "@/screens/whyEvolve/Evolve";
import OurClasses from "@/screens/ourClasses/OurClasses";
import RollingRibbon from "@/shared/RollingRibbon";
import ContactUs from "@/screens/contacts/ContactUs";

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

      <OurClasses setSelectedPage={setSelectedPage} />

      <ContactUs setSelectedPage={setSelectedPage} />

      <Footer />
    </div>
  );
};

export default App;
