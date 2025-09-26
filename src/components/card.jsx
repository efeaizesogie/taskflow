import React from 'react'
import TitleHead from './titleHead'

const Card = ({children, tag, heading, text , small,  smallCol, moreBtn }) => {
  return (
    <div className={`bg-white border border-text rounded-lg shadow-md flex justify-between w-full h-[380px] ${smallCol ? 'flex-col' : "col-span-1 md:col-span-2 flex-col md:flex-row" }`}>
        <div className='p-6 flex-1 sm:h-full'>
            <TitleHead tag={tag} heading={heading} text={text} small={small} />

            <a href={`#${moreBtn}`} className=' hover:underline trnasition-all delay-300 ease-out flex gap-2 items-center mt-6 w-fit '>{moreBtn} <img src='chevron_right.svg' alt='right arrow' /> </a>
        </div>
        
        <div className='flex-1 sm:h-full overflow-hidden rounded-b-lg sm:rounded-b-none sm:rounded-r-lg'>
            {children}
        </div>
    </div>
  )
}

export default Card