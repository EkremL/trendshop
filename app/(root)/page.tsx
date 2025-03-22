import ProductList from "@/components/shared/product/product-list";
// import sampleData from "@/db/sample-data"; before db
import {
  getLatestProducts,
  getFeaturedProducts,
} from "@/lib/actions/product.actions";
import ProductCarousel from "@/components/shared/product/product-carousel";
import ViewAllProductsButton from "@/components/view-all-products-button";
import IconBoxes from "@/components/icon-boxes";
import DealCountdown from "@/components/deal-countdown";

const page = async () => {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();

  return (
    <div>
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <ProductList
        // data={sampleData.products}
        data={latestProducts}
        title="Newest Arrivals"
        // limit={4} actionsta constant tanımlayıp yine 4 tane olcak şekilde tanıttık ama istersek limiti burada açık tutabiliriz bir şey değişmeyecek
      />
      <ViewAllProductsButton />
      <DealCountdown />
      <IconBoxes />
    </div>
  );
};

export default page;
