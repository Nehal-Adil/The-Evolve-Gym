import {
  SelectedPageEnum,
  type BenefitType,
  type SelectedPage,
} from "@/shared/types";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import {
  benefit_01,
  benefit_02,
  benefit_03,
  gym_poster06,
} from "@/assets/assets";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    image: benefit_01,
    description:
      "We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    image: benefit_02,
    description:
      "We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    image: benefit_03,
    description:
      "We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="benefits" className="mx-auto min-h-full px-10">
      {/* <div className="absolute mx-auto h-full w-full">
        <img src={benefits_wall01} alt="benefits-wall" className="" />
      </div> */}
      <motion.div
        className=""
        onViewportEnter={() => setSelectedPage(SelectedPageEnum.Benefits)}
      >
        {/* Headings */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={fadeUp}
        >
          <h1 className="font-montserrat basis-3/5 text-3xl font-bold">
            MORE THAN JUST A GYM
          </h1>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              image={benefit.image}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Graphic and Description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-14 md:flex">
          {/* Graphic */}
          <img
            src={gym_poster06}
            alt="benefits-graphic"
            className="mx-auto ml-1.5 md:w-1/3"
          />

          {/* Description */}
          <div className="">
            {/* Title */}
            <div className="relative">
              <div className="before:content-abstractwaves before:absolute before:-top-20 before:-left-20 before:z-[-1]">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <h1 className="font-montserrat basis-3/5 text-3xl font-bold">
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </h1>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="md:pr-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Community in fitness acts as a powerful motivator, transforming
                exercise from a solitary chore into a shared experience that
                fosters trust, accountability, and a sense of belonging. These
                environments, including running clubs or group classes, improve
                mental/physical health by providing social support, reducing
                loneliness, and enhancing consistency.
              </p>
              <p className="mb-5">
                Evolve provides a supportive community that encourages
                participation, encourages healthy habits, and provides a safe
                space for individuals to share their experiences. By fostering a
                sense of belonging, individuals feel more connected to the
                community, leading to increased motivation and a greater sense
                of accomplishment.
              </p>
            </motion.div>

            {/* Button */}
            <div className="relative mt-8">
              <div className="before:content-sparkles before:absolute before:right-40 before:-bottom-20 before:z-[-1]">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
