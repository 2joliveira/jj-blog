import {
  CallToAction,
  FeatureSection,
  HeroSection,
  SupportSection,
} from "./sections";

export const LandingPage = () => {
  return (
    <article className="flex flex-col">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CallToAction />
    </article>
  );
};
