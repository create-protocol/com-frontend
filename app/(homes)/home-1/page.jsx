import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Hero from "@/components/homes/home-1/Hero";
import Benefits from "@/components/homes/home-1/Benefits";
import Faq from "@/components/homes/home-1/Faq";

import Hero1 from "@/components/homes/home-1/Hero1";
import Partners2 from "@/components/homes/home-1/Partners2";
import Hero2 from "@/components/homes/home-1/Hero2";

export const metadata = {
  title: "Home",
};
export default function HomePage1() {
  return (
    <>
      <Header1 />
      <main>
        <Hero />
          <Hero1 />
          {/*<Partners />*/}
          <Hero2/>
          <Benefits />
          {/*<Intro />*/}
          <Faq />
          <Partners2 />
          {/*<Cta />*/}
      </main>
      <Footer1 />
    </>
  );
}
