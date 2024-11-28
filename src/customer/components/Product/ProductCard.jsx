import React from 'react'
import "./ProductCard.css"

const ProductCard = () => {
  return (
    <div className='productCard w-[15rem] m-3 trasition-all cursor-pointer'>
        <div className='h-[20rem] '>
            <img className='h-full w-full object-cover object-right' src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_14.jpg" alt="" />
        </div>
        
        <div className='textPart bg-white p-3'>
            <div>
                <p className='font-bold opacity-60'>Ahri</p>
                <p className=''>Ahri</p>
            </div>
            <div className='flex items-center space-x-2'>
                <p className='font-semibold'>199$</p>
                <p className='line-through opacity-50'>999$</p>
                <p className='text-green-600'>70% off</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard