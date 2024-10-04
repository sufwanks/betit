import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
// Import the local data
import homeData from "../../public/data/homeData.json";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: homeData.title,
    description: homeData.meta_description,
    openGraph: {
      title: homeData.meta_title ?? undefined,
      images: [{ url: homeData.meta_image.url ?? "" }],
    },
  };
}

export default async function Index() {
  const slicesWithIds = homeData.slices.map((slice, index) => ({
    ...slice,
    id: slice?.id && `slice-${index}`, // Add an id if missing
  }));

  return <SliceZone slices={slicesWithIds} components={components} />;
}
