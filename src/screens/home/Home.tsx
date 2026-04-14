import { gym_poster03, gym_promo } from "@/assets/assets";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import Button from "@/shared/Button";
import { SelectedPageEnum, type SelectedPage } from "@/shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      className={`relative flex w-full flex-col items-center justify-center overflow-hidden ${isAboveMediumScreens ? "h-screen" : "h-auto"}`}
    >
      <div
        className={`${isAboveMediumScreens ? "absolute inset-0 z-0" : "relative h-[75vh] w-full"}`}
      >
        {/* 1. Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={gym_poster03}
          className="h-full w-full object-cover"
        >
          <source src={gym_promo} type="video/mp4" />
        </video>

        {/* 2. Dark Overlay (For text readability) */}
        {isAboveMediumScreens && (
          <div className="absolute z-10 h-full w-full bg-black/40" />
        )}
      </div>

      {/* 3. Content Layer */}
      <div
        className={`relative z-20 px-4 text-center ${isAboveMediumScreens ? "bottom-0 flex h-3/4 w-full flex-col items-start justify-end px-8 text-white" : "w-full bg-gray-900 py-12 text-white"}`}
      >
        <h1 className="mb-4 text-5xl font-black tracking-tighter uppercase md:text-7xl">
          Team Training <br />
          <span className="text-red-600">Life Changing</span>
        </h1>
        <p className="mb-8 max-w-lg text-left text-lg font-medium md:text-xl">
          The world’s most innovative workout. 45 minutes of heart-pumping,
          sweat-dripping fun.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            setSelectedPage={setSelectedPage}
            targetPage={SelectedPageEnum.ContactUs}
            className="bg-red-600 px-8 py-4 font-bold text-white uppercase hover:bg-red-700"
          >
            Find a Studio
          </Button>

          <Button
            setSelectedPage={setSelectedPage}
            targetPage={SelectedPageEnum.ContactUs}
            className="bg-white px-8 py-4 font-bold text-black uppercase transition-colors hover:bg-gray-100"
          >
            Try for Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
