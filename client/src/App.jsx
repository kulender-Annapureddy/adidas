import { Hero, CustomerReviews, SpeciaOffers, SupperQualtiy, Footer, Subscribe, Services, PopularProducts   } from "./sections/index"
import Nav from "./components/Nav"

const App = () => (
 <main className="relative">
   <Nav />
   <section className="xl:padding-l wide:padding-r padding-b">
    <Hero />
   </section>
   <section className="padding ">
       <PopularProducts />
   </section>
   <section className="padding ">
        <SupperQualtiy/>
   </section>
   <section className="padding-x py-10 ">
        <Services />
   </section>
   <section className="padding ">
        <SpeciaOffers />
   </section>
   <section className=" bg-pale-blue padding ">
        <CustomerReviews />
   </section>
   <section className="padding-x sm:py-32 py-16 w-full  ">
        <Subscribe/> 
   </section>
   <section className=" bg-[#3378FF] padding-x padding-t pb-8  ">
       <Footer/>
   </section>
 </main>

)
export default App