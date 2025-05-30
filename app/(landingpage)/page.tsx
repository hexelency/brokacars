// import { UserButton } from "@clerk/nextjs";
// import Image from "next/image";

import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Brokacars homepage",
    description: "Best Prices and Comfortable rides with Brokacars",
    openGraph: {
      title: "Brokacars Homepage",
      description: "Best Prices and Comfortable rides with Brokacars.",
      url: "https://brokacars.vercel.app/",
      siteName: "Brokacars",
      images: [
        {
          url: "https://brokacars.vercel.app/og-image.png",
          width: 1200,
          height: 630,
          alt: "Brokacars dashboard preview",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Brokacars homepage",
      description: "Comfortable rides with Brokacars.",
      images: ["https://brokacars.vercel.app/og-image.png"],
    },
  }
}

export default function Home() {
  return (
    <>
    <h1>
      HOME PAGE
    </h1>
    </>
  );
}
