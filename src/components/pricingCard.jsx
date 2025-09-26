import React from 'react'
import Button from './Button'

const PricingCard = ({planInfo, icon, price, children}) => {
  return (
    <div className={`bg-white border border-text rounded-lg shadow shadow-[#0d000618] flex flex-col justify-between w-full p-8 flex-1`}>
        <div className=' flex flex-col gap-8'>
            <div>
                <div className='flex  flex-col mb-4'>
                    <div className='flex justify-between items-center'>
                        <p className='text-sm font-bold mb`} font-pacifico'>{planInfo}</p>
                        <img src={icon} alt='info' />
                    </div>
                    <h3 className='text-sm text-text font-medium font-poppins'><span className='text-4xl md:text-5xl'>${price}</span>/mo</h3>
                </div>
            </div>
            <div className='w-full h-[1px] bg-text' />
            <div className='flex flex-col gap-4'>
                <p>includes:</p>
                    {children}
            </div>
        </div>
        
        <div className='items-end mt-8 md:mt-18'>
            <Button variant="primary" className="w-full"><a href="#sign-up">Get Started</a></Button>
        </div>
    </div>
  )
}

export default PricingCard