import { evolve_logo } from "@/assets/assets";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "./Link";
import type { SelectedPage } from "@/shared/types";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex justify-between items-center";

  const navbarBackground = isTopOfPage ? "bg-white/80" : "bg-white";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <nav className="">
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-5`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-20`}>
            {/* LOGO */}
            <img src="/logo.svg" alt="" className="max-w-40" />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/* INNER LEFT */}
                <div className={`${flexBetween} gap-8`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>

                {/* INNER RIGHT */}
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>

                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="bg-secondary-500 rounded-full p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {!isAboveMediumScreens && isMenuOpen && (
        <div className="bg-primary-100 fixed right-0 bottom-0 z-40 h-full w-75 drop-shadow-xl">
          {/* Close Button */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
