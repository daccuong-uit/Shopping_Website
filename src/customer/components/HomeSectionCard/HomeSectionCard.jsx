import React from 'react'

const HomeSectionCard = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col items center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-black'>
        <div className='h-[15rem]'>
            <img className='object-cover w-full h-full' 
            src ={product.imageUrl}
            alt = ""/>
        </div>
        <div className='p-4'>
            <h3 className ='text-lg front-medium text-gray-900'>{product.title}</h3>
            <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
        </div>
    </div>
  )
}

export default HomeSectionCard