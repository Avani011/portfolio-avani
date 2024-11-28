import Image from "next/image";
import { cardProps } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

const Card = ({ size, source, name, link }: cardProps) => {

  const [isMdScreen, setIsMdScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check if the screen width is medium-sized or smaller (Tailwind's `md` breakpoint is usually 768px).
      setIsMdScreen(window.innerWidth <= 1024);
    };

    // Set initial state
    handleResize();

    // Add event listener to update the state when the window is resized
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const width = size === "small" ? (isMdScreen ? 367 : 467) : (isMdScreen ? 633 : 733);
  const height = size === "small" ? (isMdScreen ? 147 : 247) : (isMdScreen ? 237 : 337);

  return (
    <div className={`flex-shrink-0 flex flex-col justify-start sm:max-md:justify-center sm:max-md:items-center gap-2 md:max-lg:gap-4`}>
      <Link href={link}>
        <Image
          src={source}
          alt={name}
          width={width}
          height={height}
          className="rounded-lg object-cover"
        />
        <h2 className="text-xl md:max-lg:text-lg font-semibold">{name}</h2>
      </Link>
    </div>
  );
};

export default Card;
