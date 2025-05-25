import { BannerGetStarted } from "@/components/ui/banners/bannerGetStarted";
import { Hero } from "./hero";
import { Reviews } from "./reviews";
import Price from "./price";
import { FAQ } from "./faq";
import { Features } from "./features";
import SleekDescription from "../sleek-description";

export const HomePage = ({}) => {
  return (
    <>
      <Hero />
      <SleekDescription />
      <Features />
      <Reviews />
      <Price />
      <FAQ />
      <BannerGetStarted />
    </>
  );
};
