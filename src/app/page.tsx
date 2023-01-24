import { Product } from "@/components";
import { findAllProducts } from "@/services/products";

const Home = async () => {
  const products = await findAllProducts();

  return (
    <>
      {products?.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </>
  );
};

export default Home;
