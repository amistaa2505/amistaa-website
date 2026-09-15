import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CreatorEconomy } from "@/components/sections/CreatorEconomy";
import { DownloadCTA } from "@/components/sections/DownloadCTA";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Security } from "@/components/sections/Security";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <CreatorEconomy />
        <Security />
        <FAQ limit={3} />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
