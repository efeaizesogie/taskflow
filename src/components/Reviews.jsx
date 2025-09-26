import React from 'react'
import TitleHead from './titleHead'
import Card from './card'
import ReviewCard from './reviewCard'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Reviews = () => {
  const [titleRef, titleVisible] = useScrollAnimation()
  const [cardsRef, cardsVisible] = useScrollAnimation()

  return (
    <section className='bg-dark-bg' id='reviews'>
        <div 
          ref={titleRef}
          className={`flex flex-col px-5 md:px-20 py-16 max-w-[768px] transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
            <TitleHead tag="Reviews" heading="What our users say" text="Real stories from teams who transformed their productivity." noCenter/>
        </div>


        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-20 pb-16 mx-auto transition-all duration-700 delay-200 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >

            <ReviewCard avatar="/avatar-1.png" review="TaskFlow transformed the way my team works. Simple, clean, and effective." icon="/notion.svg" reviewer="Sarah Johnson" reviewerPost="CTO, Digital Solutions" />
            <ReviewCard avatar="/avatar-2.png" review="Our workflow has never been more organized and efficient." icon="/google.svg" reviewer="Micheal Chen" reviewerPost="CTO, Notion" />
            <ReviewCard avatar="/avatar-3.png" review="TaskFlow helps us stay aligned and focused on our goals." icon="/dribbble.svg" reviewer="Emma Rodriguez" reviewerPost="Project Manager, Creative Agency"  />
           
        </div>
    </section>
  )
}

export default Reviews