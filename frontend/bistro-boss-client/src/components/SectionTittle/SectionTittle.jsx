import React from 'react'

export default function SectionTittle({ heading, subHeading }) {
    return (
        <div className='text-center mb-8'>
            <p className='text-yellow-500'>{subHeading}</p>
            <div className="border-b-2 border-gray-300 w-1/2 mx-auto my-4"></div>
            <h3 className='text-4xl font-inter'>{heading}</h3>
            <div className="border-b-2 border-gray-300 w-1/2 mx-auto my-4"></div>

        </div>
    )
}
