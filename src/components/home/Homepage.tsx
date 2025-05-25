import { BannerGetStarted } from "@/components/ui/banners/bannerGetStarted";
import { Hero } from "./hero";
import { Reviews } from "./reviews";
import Price from "./price";
import { FAQ } from "./faq";
import { Features } from "./features";

export const HomePage = ({}) => {
  return (
    <>
      <Hero />
      <Features />
      <Reviews />
      <Price />
      <FAQ />
      <BannerGetStarted />
    </>
  );
};
