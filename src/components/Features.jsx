import React from 'react'
import TitleHead from './titleHead'
import Card from './card'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Features = () => {
  const [titleRef, titleVisible] = useScrollAnimation()
  const [cardsRef, cardsVisible] = useScrollAnimation()

  return (
    <section className='bg-light-bg' id='features'>
        <div 
          ref={titleRef}
          className={`flex flex-col justify-center items-center px-5 md:px-20 py-16 max-w-[768px] mx-auto transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
            <TitleHead tag="Features" heading="Powerful tools for your workflow" text="Streamline your productivity with intuitive design." />
        </div>


        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-4 gap-8 px-5 md:px-20 pb-16 mx-auto transition-all duration-700 delay-200 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >

            <Card tag="Tasks" heading="Stay on top of everything" text="Create smart task lists that adapt to your work style." small moreBtn="Explore">
                <img src="/stay-on-top.png" alt="feature1" className='w-full h-full rounded-br-lg rounded-tr-lg'/>
            </Card>

            <Card tag="Collaborate" heading="Work together" text="Share updates and track team progress in real-time." small smallCol moreBtn="Discover">
                <img src="/swork-together.png" alt="feature1" className='w-full h-full rounded-br-lg rounded-bl-lg'/>
            </Card>

            <Card tag="Insights" heading="Track progress" text="Visualize your productivity with simple, clear analytics." small smallCol moreBtn="Learn more">
                <img src="/track-progress.png" alt="feature1" className='w-full h-full rounded-br-lg rounded-bl-lg'/>
            </Card>
           
        </div>
    </section>
  )
}

export default Features