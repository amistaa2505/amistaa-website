import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AppScreens } from "@/components/sections/AppScreens";
import { CreatorEconomy } from "@/components/sections/CreatorEconomy";
import { Contact } from "@/components/sections/Contact";
import { DownloadCTA } from "@/components/sections/DownloadCTA";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Security } from "@/components/sections/Security";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Features />
        <CreatorEconomy />
        <AppScreens />
        <Security />
        <Testimonials />
        <FAQ />
        <Contact />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
