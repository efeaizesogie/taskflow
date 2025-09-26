import React from 'react'
import TitleHead from './titleHead'
import Card from './card'

const Features = () => {
  return (
    <section className='bg-light-bg' id='features'>
        <div className='flex flex-col justify-center items-center px-5 md:px-20 py-16 max-w-[768px] mx-auto' >
            <TitleHead tag="Features" heading="Powerful tools for your workflow" text="Streamline your productivity with intuitive design." />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-5 md:px-20 pb-16  mx-auto">

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