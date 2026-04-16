import {
  facebook,
  instagram,
  linkedin,
  logo,
  x,
  youtube,
} from "@/assets/assets";

const Footer = () => {
  const iconStyles =
    "border-primary-300 border-2 h-10 w-10 rounded-full border bg-transparent text-white p-1.5 hover:border-white";

  const hrStyles = "mx-auto my-4 h-2 w-[90%] text-center text-gray-400";

  return (
    <footer className="bg-secondary-400 space-y-6 py-8">
      <div className="">
        {/* LOGO + LINKS */}
        <div className="flex flex-col items-center justify-center gap-6 px-12 md:flex-row md:justify-between">
          <img alt="logo" src={logo} className="w-72" />

          <div className="mb-6 flex gap-4">
            <img src={instagram} alt="" className={`${iconStyles}`} />
            <img src={facebook} alt="" className={`${iconStyles}`} />
            <img src={youtube} alt="" className={`${iconStyles}`} />
            <img src={x} alt="" className={`${iconStyles}`} />
            <img src={linkedin} alt="" className={`${iconStyles}`} />
          </div>
        </div>

        <hr className={`${hrStyles}`} />

        {/* MEMBERSHIP */}
        <div className="mx-auto flex w-[90%] flex-col items-center space-y-2.5 text-white md:items-start md:space-y-4">
          <h2 className="font-sans text-lg capitalize">
            Join Our Membership today
          </h2>
          <h1 className="font-montserrat text-2xl font-bold uppercase">
            push past your limits
          </h1>
          <p className="text-center font-light md:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            elementum, nullam, mattis, semper, nisi. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed elementum, nullam
          </p>

          <button className="bg-primary-300 my-4 rounded-md px-10 py-2 font-semibold hover:bg-red-600 hover:text-white hover:shadow-xl">
            Become a Member
          </button>
        </div>

        <hr className={`${hrStyles}`} />

        {/* CONTACT US */}
        <div className="flex gap-8 px-12 text-white">
          <p className="">© Evolve Gym All Rights Reserved.</p>
          <h4 className="hover:text-primary-300 uppercase">
            terms & disclosures
          </h4>
          <h4 className="hover:text-primary-300 uppercase">privacy policy</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
