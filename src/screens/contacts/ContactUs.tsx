import { gym_poster06, gym_poster07 } from "@/assets/assets";
import { SelectedPageEnum, type SelectedPage } from "@/shared/types";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white text-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto flex px-15 py-10 md:flex-row">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPageEnum.ContactUs)}
        viewport={{ amount: 0.2 }}
      >
        {/* Header */}
        <motion.div
          className="md:w-4/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="font-montserrat text-3xl font-bold">
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </h1>
          <p className="my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            voluptate tempora eum aliquam.
          </p>
        </motion.div>

        {/* Form and Image Container */}
        <div className="mt-10 flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Form Wrapper */}
          <motion.div
            className="basis-4/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              action="https://formsubmit.co/parker12oct@gmail.com"
              method="POST"
              target="_blank"
              onSubmit={onSubmit}
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", { required: true, maxLength: 50 })}
              />
              {errors.name && (
                <p className="text-primary-500 mt-1">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 50 characters"}
                </p>
              )}

              <input
                className={inputStyles}
                type="email"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-primary-500 mt-1">
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}

              <textarea
                className={inputStyles}
                rows={4}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="text-primary-500 mt-1">
                  {errors.message.type === "required" &&
                    "This field is required"}
                </p>
              )}

              <button
                type="submit"
                className="bg-secondary-400 hover:bg-primary-300 mt-5 rounded-lg px-20 py-3 font-bold text-white transition duration-300"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="relative basis-full md:basis-2/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="md:before:content-evolvetext before:absolute before:-right-10 before:-bottom-8 before:z-[-1]">
          <img className="w-full" alt="contact-graphic" src={gym_poster07} />
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
