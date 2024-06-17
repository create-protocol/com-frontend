import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Collections from "@/components/collections/Collections";

export const metadata = {
  title: "Explore",
};

export default function ExplorePage() {
  return (
    <>
      <Header1 />
      <main>
        <Collections />
      </main>
      {/*<Footer1 />*/}
    </>
  );
}
