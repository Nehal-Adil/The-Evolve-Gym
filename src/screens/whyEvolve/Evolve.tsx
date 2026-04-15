import { gym_poster04, gym_poster05 } from "@/assets/assets";
import Button from "@/shared/Button";
import { SelectedPageEnum, type SelectedPage } from "@/shared/types";
import { StarIcon } from "@heroicons/react/16/solid";
import { motion } from "motion/react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Evolve = ({ setSelectedPage }: Props) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="flex flex-col items-center justify-center px-5 py-10 md:flex-row md:justify-between md:px-10">
      {/* Photo 1 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.0 }}
        variants={fadeInUp}
        className="border border-black md:h-80 md:w-3/4"
      >
        <img
          src={gym_poster05}
          alt="gym-poster-05"
          className="h-full w-full object-cover"
        />
      </motion.div>
      {/* {Why Evolve } */}
      <motion.div
        className="my-5 text-center md:mx-10 md:w-3/4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5 }}
        variants={fadeInDown}
      >
        <div className="text-primary-500 mb-3 flex justify-center gap-2">
          <StarIcon className="h-6 w-6" />
          <StarIcon className="h-6 w-6" />
          <StarIcon className="h-6 w-6" />
        </div>
        <p className="text-secondary-400 text-sm font-semibold uppercase">
          backed by science
        </p>
        <h1 className="text-secondary-400 my-3 font-sans text-3xl font-extrabold uppercase">
          Why Evolve?
        </h1>
        <p className="mt-5 mb-8 text-sm">
          Born in India, Evolve Training merges three leading-edge fitness
          training styles into one 45-minute functional training class. With
          each session, you’ll experience the elite, proven benefits of
          combining high-intensity interval training (HIIT), circuit training,
          and functional training in order to provide you with the results
          you’re looking for – all in just under an hour.
        </p>
        <Button
          setSelectedPage={setSelectedPage}
          targetPage={SelectedPageEnum.Benefits}
          className="border-primary-500 text-secondary-400 hover:bg-primary-300 rounded-2xl border-2 px-4 py-2 font-bold uppercase hover:text-white hover:shadow-xl"
        >
          Learn More
        </Button>
      </motion.div>
      {/* Photo 2 */}
      <motion.div
        className="my-5 md:h-80 md:w-3/4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.0 }}
        variants={fadeInUp}
      >
        <img
          src={gym_poster04}
          alt="gym-poster-04"
          className="h-full w-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Evolve;
