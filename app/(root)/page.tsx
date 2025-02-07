import ProductList from "@/components/shared/product/product-list";
// import sampleData from "@/db/sample-data"; before db
import { getLatestProducts } from "@/lib/actions/product.actions";
const page = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <div>
      <ProductList
        // data={sampleData.products}
        data={latestProducts}
        title="Newest Arrivals"
        // limit={4} actionsta constant tanımlayıp yine 4 tane olcak şekilde tanıttık ama istersek limiti burada açık tutabiliriz bir şey değişmeyecek
      />
    </div>
  );
};

export default page;
