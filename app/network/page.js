import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import History from "@/components/network/History";
import Ranking from "@/components/Ranking";
import Numbers from "@/components/network/Numbers";

export const metadata = {
    title: "Manage",
};

export default function UserPage() {
    return (
        <>
            <Header1 />
            <main className="pt-[5.5rem] lg:pt-24">
                {/*<Banner />*/}
                {/*<Profile />*/}
                <Numbers />
                <History />
                <Ranking />
            </main>
            <Footer1 />
        </>
    );
}
