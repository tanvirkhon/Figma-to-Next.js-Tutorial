import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import AreasContainer from "../components/areas-container";
import AreaFeatureCard from "../components/area-feature-card";
import RentPropertiesForm from "../components/rent-properties-form";
import RentPropertiesContainer from "../components/rent-properties-container";
import ContactForm from "../components/contact-form";
import FooterSection from "../components/footer-section";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Discover your perfect home" />
      </Head>
      <div className="relative bg-gray-white w-full h-[5095.99px] flex flex-col items-center justify-start">
        <Header hamburger={false} />
        <Hero />
        <AreasContainer />
        <AreaFeatureCard />
        <RentPropertiesForm />
        <RentPropertiesContainer />
        <ContactForm />
        <FooterSection
          houseLine="/houseline2.svg"
          socialMediaLogo="/social-media-logo5.svg"
          socialMediaLogo1="/social-media-logo6.svg"
          socialMediaLogo2="/social-media-logo7.svg"
          socialMediaLogo3="/social-media-logo8.svg"
          socialMediaLogo4="/social-media-logo9.svg"
          propOverflow="unset"
        />
      </div>
    </>
  );
};

export default LandingPage;
