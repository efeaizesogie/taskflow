import React from 'react'

const ReviewCard = ({avatar, review, icon, reviewer, reviewerPost}) => {
  return (
    <div className={`border border-[#f2f2f288] rounded-xl shadow-md p-8`}>
        
        <img src={icon} alt='notion icon' className='mb-12' /> 

        <div className=' flex-1 sm:h-full'>

            <div className='flex flex-col gap-6'>
                <p className='text-base md:text-lg text-text-dark w-full md:w-[90%]'>{review}</p>
                <div className='text-base md:text-lg text-[#c4c4c4] flex gap-4 items-center'>
                    <img src={avatar} alt='avatar' className='inline mr-2 ' />
                    <div>
                        <p className='font-bold'>{reviewer}</p>
                        <p>{reviewerPost}</p>
                    </div>
                    
                </div>
            </div>

            <a href={`#read-case-study`} className=' hover:underline trnasition-all delay-300 ease-in flex gap-2 items-center mt-6 w-fit '>Read case study <img src='/chevron_right.svg' alt='right arrow' /> </a>
        </div>
        
    </div>
  )
}

export default ReviewCard