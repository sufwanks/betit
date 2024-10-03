import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
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
  return <SliceZone slices={homeData.slices} components={components} />;
}
