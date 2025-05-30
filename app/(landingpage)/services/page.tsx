import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Brokacars services",
    description: "Best Prices and Comfortable rides with Brokacars",
    openGraph: {
      title: "Brokacars services",
      description: "Best Prices and Comfortable rides with Brokacars.",
      url: "https://brokacars.vercel.app/services",
      siteName: "Brokacars service page",
      images: [
        {
          url: "https://brokacars.vercel.app/og-image1.jpg",
          width: 1200,
          height: 630,
          alt: "Brokacars services preview",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Brokacars homepage",
      description: "Comfortable rides with Brokacars.",
      images: ["https://brokacars.vercel.app/og-image1.jpg"],
    },
  }
}

const page = () => {
  return (
    <div>
      services page unprotected
    </div>
  )
}

export default page
