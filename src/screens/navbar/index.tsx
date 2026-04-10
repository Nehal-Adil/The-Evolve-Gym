import { evolve_logo } from "@/assets/assets";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon } from "@heroicons/react/16/solid";
import Link from "./Link";
import type { SelectedPage } from "@/shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex justify-between items-center";

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full bg-gray-200 py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LOGO */}
            <img src="/logo.svg" alt="" className="w-24" />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} gap-8`}>
                {/* INNER LEFT */}
                <div className={`${flexBetween} w-full`}>
                  <ul className={`${flexBetween} gap-8 text-sm`}>
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
                  </ul>
                </div>

                {/* INNER RIGHT */}
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>

                  <button>Become a Member</button>
                </div>
              </div>
            ) : (
              <button className="bg-secondary-500 rounded-full p-2">
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
