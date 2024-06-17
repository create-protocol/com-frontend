import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import ItemDetails from "@/components/collections/ItemDetails";

export const metadata = {
  title: "Item Details",
};

export default function ItemDetailsPage({ params }) {
  return (
    <>
      <Header1 />
      <main className="mt-24">
        <ItemDetails id={params.id} />
      </main>
      {/*<Footer1 />*/}
    </>
  );
}
