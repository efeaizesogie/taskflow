import React from 'react'

const CheckText = ({text}) => {
  return (
    <div className='flex items-center gap-4'>
        <img src='/check.svg' alt='check icon' />

        <p>
            {text}
        </p>
    </div>
  )
}

export default CheckText