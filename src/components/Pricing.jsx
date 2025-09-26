import React, { useState } from 'react'
import TitleHead from './titleHead'
import PricingCard from './pricingCard';
import CheckText from './checkText';

const Pricing = () => {

    const [activePlan, setActivePlan] = useState('monthly');

    const getBorderStyle = (plan) => activePlan === plan ? "border border-text" : "";

    const freePrice = 0;

    const monthlyProPrice = 29;
    const yearlyProPrice = 38;

    const monthlyTeamPrice = 40;
    const yearlyTeamPrice = 60;

    const proPrice = activePlan === 'monthly' ? monthlyProPrice : yearlyProPrice;
    const teamPrice = activePlan === 'monthly' ? monthlyTeamPrice : yearlyTeamPrice;



  return (
    <section className='bg-light-bg mb-10 md:mb-16' id='pricing'>
        <div className='flex flex-col justify-center items-center px-5 md:px-20 py-16 max-w-[768px] mx-auto' >
            <TitleHead tag="Pricing" heading="Simple, transparent pricing" text="Choose a plan that fits your team's unique needs." />

            <div className='mb-12 flex justify-center gap-4 px-5 md:px-20 mt-12 '>
                <div className='border border-text text-text rounded-lg p-1'>
                    <button className={`${getBorderStyle('monthly')} px-6 py-2 rounded-lg font-medium cursor-pointer`} onClick={() => setActivePlan('monthly')}>Monthly</button>
                    <button className={`${getBorderStyle('yearly')} px-6 py-2 rounded-lg font-medium cursor-pointer`} onClick={() => setActivePlan('yearly')}>Yearly</button>
                </div>
            </div>
            
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-20 pb-16  mx-auto">
                <PricingCard planInfo="Free plan" icon='/plan.svg' price={freePrice} >
                    <CheckText text="Basic task management" />
                    <CheckText text="Limited team collaboration" />
                    <CheckText text="Essential features" />
                </PricingCard>

                <PricingCard planInfo="Pro plan" icon="/pro-icon.svg" price={proPrice} >
                    <CheckText text="Advanced task management" />
                    <CheckText text="Team collaboration" />
                    <CheckText text="Intergrated support" />
                    <CheckText text="Priority support" />
                </PricingCard>

                <PricingCard planInfo="Team plan" icon="/team-plan.svg" price={teamPrice} >
                    <CheckText text="Unlimited team seats" />
                    <CheckText text="Advanced analytics" />
                    <CheckText text="Custom intergration" />
                    <CheckText text="Dedicated support" />
                    <CheckText text="Enterprise features" />
                </PricingCard>
        </div>
    </section>
  )
}


export default Pricing