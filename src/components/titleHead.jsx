import React from 'react'

const TitleHead = ({tag, heading, text, small, noCenter}) => {

  const textSize = small 
    ? 'text-lg md:text-xl font-bold mb-2 font-poppins' 
    : `text-3xl md:text-5xl font-bold mb-6 font-poppins ${!noCenter ? 'text-center ' : 'text-text-dark'}`;
 

  return (
    <>
        <p className={`text-sm font-bold ${small ? 'mb-2' : `${!noCenter ? 'text-center' : 'text-text-dark'} mb-4`} font-pacifico`}>
            {tag}
        </p>
        <h1 className={textSize}>{heading}</h1>
        <p className={`text-base md:text-lg ${small ? 'mb-2' : `${!noCenter ? 'text-center' : ''} mb-8`} text-[#868686]`}>{text}</p>
    </>
  )
}

export default TitleHead