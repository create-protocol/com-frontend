import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
// import Partners from "@/components/common/Partners2";

import Intro from "@/components/about/Intro";
import PageTitle from "@/components/about/PageTitle";
import Story from "@/components/about/Story";
import Team from "@/components/about/Team";

// import Blogs from "@/components/pages/about/Blogs";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <Header1 />
      <main>
        <PageTitle />
        {/*<Intro />*/}
        <Story />
        <Team />
        {/*<Partners />*/}
        {/*<Blogs />*/}
      </main>
      <Footer1 />
    </>
  );
}
