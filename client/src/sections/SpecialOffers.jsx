import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"


const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} 
        alt="offer"
        width={773}
        height={687}
        className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
    <h2 className="mt-10 font-palanquin capitalize  text-4xl  font-bold lg:max-w-lg">
      
      <span className="text-[#3378FF]"> Special </span> Offer  
    <br/>
    
             
    </h2>
     <p className="mt-4 lg:max-w-lg info-text">Adidas products are renowned for their superior quality, 
     blending cutting-edge technology with innovative design. 
     From their iconic footwear to performance-enhancing apparel,
      Adidas consistently delivers durability, comfort, and style. 
      Their commitment to excellence ensures that athletes and enthusiasts alike can rely on Adidas 
      gear to perform at their best, making every stride, jump, and movement feel 
      effortless and supported.</p>
      <div className="mt-11 flex flex-wrap gap-4">
      <Button  label="view detials"
      iconURL={arrowRight} />
      <Button label="learn more"
      backgroundColor='bg-white'
      borderColor='border-[#3378FF]'
      textColor='text-[#3378FF]'
       />
      </div>
      </div>
    </section>
  )
}

export default SpecialOffers
