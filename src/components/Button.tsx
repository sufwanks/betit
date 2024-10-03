// import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import Link from "next/link";

type Props = {
  buttonLink: string;
  buttonText: string | null;
  className?: string;
};

export default function Button({ buttonLink, buttonText, className }: Props) {
  return (
    <Link
      className={clsx(
        "rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl",
        className,
      )}
      href={buttonLink}
    >
      {buttonText}
    </Link>
    // <PrismicNextLink
    //   className={clsx(
    //     "rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl",
    //     className,
    //   )}
    //   field={buttonLink}
    // >
    //   {buttonText}
    // </PrismicNextLink>
  );
}
