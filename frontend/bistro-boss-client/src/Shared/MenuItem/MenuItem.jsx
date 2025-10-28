import React from 'react'

export default function MenuItem({item}) {
    const {image,name,price,category,recipe} = item
  return (
    <div className='flex gap-4'>
        <img className='w-[118px] h-[104px] rounded-lg mb-2 border-radius-0 ' src={image} style={{ borderRadius: "0px 200px 200px 200px" }} alt="" />
        <div>
            <h3 className='font-semibold text-slate-500'>------{name}---------</h3>
            <p className='text-gray-600'>{recipe}</p>
        </div>
        <p className='text-yellow-500'>{price}</p>
      
    </div>
  )
}
