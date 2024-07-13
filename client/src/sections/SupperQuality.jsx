
import { shoe8 } from "../assets/images";
import Button from "../components/Button"


const SupperQuality = () => {
  return (
    <section 
    id="about-us"
    className="flex justify-between items-center  max-lg:flex-col
    gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
    <h2 className="mt-10 font-palanquin capitalize  text-4xl  font-bold lg:max-w-lg">
      We Provide You 
      <span className="text-[#3378FF]"> Super </span>
      <span className="text-[#3378FF]">Quality</span> Products  
    <br/>
    
             
    </h2>
     <p className="mt-4 lg:max-w-lg info-text">Adidas products are renowned for their superior quality, 
     blending cutting-edge technology with innovative design. 
     From their iconic footwear to performance-enhancing apparel,
      Adidas consistently delivers durability, comfort, and style. 
      Their commitment to excellence ensures that athletes and enthusiasts alike can rely on Adidas 
      gear to perform at their best, making every stride, jump, and movement feel 
      effortless and supported.</p>
      <div className="mt-11">
      <Button  label="view detials" />
      </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} 
        alt="shoe8"
        width={570}
        height={522}
        className="object-contain"
        />

      </div>

    </section>
  )
}

export default SupperQuality;
