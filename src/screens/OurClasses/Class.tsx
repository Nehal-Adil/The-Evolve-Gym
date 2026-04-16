type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `bg-secondary-500 absolute z-30 flex h-95 w-md flex-col items-center justify-center p-5 text-center whitespace-normal text-white opacity-0 transition duration-500 hover:opacity-80`;

  return (
    <li className="relative mx-5 inline-block h-95 w-md">
      <div className={`${overlayStyles}`}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img src={image} alt={`${image}`} />
    </li>
  );
};

export default Class;
