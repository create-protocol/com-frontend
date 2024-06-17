import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Hero from "@/components/homes/home-1/Hero";
// import Cta from "@/components/homes/home-1/Cta";

export const metadata = {
  title: "Home 1 || Xhibiter | NFT Marketplace Nextjs Template",
};
export default function HomePage1() {
  return (
    <>
      <Header1 />
      <main>
        <Hero />
      </main>
      {/*<Footer1 />*/}
    </>
  );
}
