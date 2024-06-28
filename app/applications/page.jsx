import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Features from "@/components/home-10/Features";
import Hero from "@/components/home-10/Hero";
import Promo from "@/components/home-10/Promo";
// import Partners from "@/components/common/Partners2";
import Benefits from "@/components/home-10/Benefits";
// import Testimonials from "@/components/common/Testimonials";
// import Cta from "@/components/common/Cta";
import Help from "@/components/home-10/Help";
import Apps from "@/components/home-10/Apps";

export const metadata = {
  title: "Apps",
};
export default function HomePage10() {
  return (
    <>
      <Header1 />
      <main>
        {/* <Hero /> */}
        {/* <Features /> */}
        {/* <Promo /> */}
        {/*<Partners />*/}
        {/* <Benefits /> */}
        {/*<Testimonials />*/}
        {/*<Cta />*/}
        {/* <Help /> */}
        <Apps />
      </main>
      <Footer1 />
    </>
  );
}
