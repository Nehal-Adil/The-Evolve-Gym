import {
  type ClassType,
  type SelectedPage,
  SelectedPageEnum,
} from "@/shared/types";
import { motion } from "motion/react";
import Class from "./Class";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image8,
} from "@/assets/assets";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptatem.",
    image: image1,
  },
  {
    name: "Fitness Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptatem.",
    image: image2,
  },
  {
    name: "Calisthenics Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptatem.",
    image: image3,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptatem.",
    image: image4,
  },
  {
    name: "Yoga Classes",
    image: image5,
  },
  {
    name: "Pilates Classes",
    image: image8,
  },
];

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full px-10 py-10">
      <motion.div
        className=""
        onViewportEnter={() => setSelectedPage(SelectedPageEnum.OurClasses)}
      >
        {/* HEADINGS */}
        <div className="mx-auto">
          <div className="md:w-3/5">
            <h1 className="font-montserrat basis-3/5 text-3xl font-bold">
              OUR CLASSES
            </h1>
            <p className="py-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
              voluptatum obcaecati possimus amet officia consequuntur nulla
              veniam dolore consequatur omnis optio, maiores quasi quam sed?
            </p>
          </div>
        </div>
        {/* CLASSES */}
        <div className="mt-10 h-72 w-full overflow-x-auto overflow-y-hidden md:h-80">
          <ul className="w-700 whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
