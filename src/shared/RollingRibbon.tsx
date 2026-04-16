const RollingRibbon = () => {
  const text = "Life Changing";
  const text2 = "Team Training";

  return (
    <div className="bg-primary-500 relative mt-15 flex overflow-x-hidden py-4 text-white">
      {/* This inner div moves left. We repeat the text many times to fill space. */}
      <div className="animate-marquee bg-secondary-400 flex py-2 whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-4 text-4xl font-bold uppercase">
            <span className="mx-8">{text}</span>
            <span>⨂</span>
            <span className="mx-8">{text2}</span>
            <span>⨂</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default RollingRibbon;
