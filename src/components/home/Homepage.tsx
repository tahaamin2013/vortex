import { BannerGetStarted } from "@/components/ui/banners/bannerGetStarted";
import { Hero } from "./hero";
import { Reviews } from "./reviews";
// import { Price } from "./price";
import { FAQ } from "./faq";

export const HomePage = ({}) => {
  return (
    <>
      <Hero />
      <Reviews />
      {/* <Price /> */}
      <FAQ />
      <BannerGetStarted />
    </>
  );
};