import { SelectedPageEnum, type SelectedPage } from "@/shared/types";
import { type JSX } from "react";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
  image: string;
};

const Benefit = ({
  image,
  icon,
  title,
  description,
  setSelectedPage,
}: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="relative mt-5 rounded-lg border-2 border-gray-100 px-5 py-16 text-center"
    >
      <img
        src={image}
        alt={title}
        className="object-cove absolute inset-0 top-0 left-0 z-0 h-full w-full rounded-lg"
      />

      <div className="absolute inset-0 z-10 rounded-lg bg-black/30" />

      <div className="relative z-20">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full border-2 border-gray-100 bg-white p-4">
            {icon}
          </div>
        </div>

        <h4 className="font-bold text-white">{title}</h4>
        <p className="my-3 text-white">{description}</p>

        <a
          href={`#${SelectedPageEnum.ContactUs}`}
          className="text-primary-500 text-md font-bold underline hover:text-white"
          onClick={() => setSelectedPage(SelectedPageEnum.ContactUs)}
        >
          <p>Learn More</p>
        </a>
      </div>
    </motion.div>
  );
};

export default Benefit;
