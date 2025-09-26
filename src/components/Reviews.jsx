import React from 'react'
import TitleHead from './titleHead'
import Card from './card'
import ReviewCard from './reviewCard'

const Reviews = () => {
  return (
    <section className='bg-dark-bg' id='reviews'>
        <div className='flex flex-col px-5 md:px-20 py-16 max-w-[768px] ' >
            <TitleHead tag="Reviews" heading="What our users say" text="Real stories from teams who transformed their productivity." noCenter/>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-20 pb-16  mx-auto">

            <ReviewCard avatar="/avatar-1.png" review="TaskFlow transformed the way my team works. Simple, clean, and effective." icon="/notion.svg" reviewer="Sarah Johnson" reviewerPost="CTO, Digital Solutions" />
            <ReviewCard avatar="/avatar-2.png" review="Our workflow has never been more organized and efficient." icon="/google.svg" reviewer="Micheal Chen" reviewerPost="CTO, Notion" />
            <ReviewCard avatar="/avatar-3.png" review="TaskFlow helps us stay aligned and focused on our goals." icon="/dribbble.svg" reviewer="Emma Rodriguez" reviewerPost="Project Manager, Creative Agency"  />
           
        </div>
    </section>
  )
}

export default Reviews