import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"

const PopularProducts = () => {
  return (
    <div>
      <section
      id="products"
      className="max-container max-sm:mt-12"
      >
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-4xl font-palanquin font-bold">
            <span className="text-[#3378FF] ">Popular</span> Products</h2>
          <p className="lg:max-w-lg mt-2 font-montserrat
          text-slate-gray">Experience a huge Collection with the top-notch quality 
            styles, and make your day more productive with our popular products.
          </p>
        </div>
         <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3
         am:grid-cols-2 grid-cols-1 sm:gap-4 sm:w-full sm:mx-auto gap-14">
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product} />
          ))}


         </div>
      </section>
    </div>
  )
}

export default PopularProducts
