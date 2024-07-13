import { copyrightSign } from '../assets/icons'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col item-start">
          <a
          href="/"
          className='text-white text-4xl'
          >
            Adidas
            </a>
            <p className=' mt-6 text-base leading-7 font-montserrat sm:max-w-sm  text-white'>Get ready shoes for the new term at your nearest 
              Adidas store. Find your perfect size In store. Get Rewards
            </p>
            <div className='flex items-center gap-5 mt-8 '>
              {socialMedia.map((icon) => (
                <div className='flex w-12 h-12 justify-center items-center rounded-full bg-white' key={icon.alt}>
                  <img src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                  /> 
                  </div>
              ))}
            </div>
        </div>
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className='text-white font-montserrat text-2xl
              leading-normal mb-6 font-medium '>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li className='mt-3 font-montserrat text-white text-base
                  leading-normal hover:text-slate-300  cursor-pointer' key={link}>
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
              </div>
          ))}
          </div> 
      </div>
      <div className='flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center
      '>
        <div className='flex flex-1 items-center gap-2 font-montserrat cursor-pointer
        '>
          <img src={copyrightSign} 
          alt='copy right sign'
          width={20}
          height={20}
          className='rounded-full font-bold m-0'/>
          <p>Copyright,. All rights reserved</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
