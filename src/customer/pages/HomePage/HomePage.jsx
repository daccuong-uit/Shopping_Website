import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { ahri } from '../../../Data/ahri';
import { akali } from '../../../Data/akali';

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
          <HomeSectionCarousel data={ahri} sectionName={"Ahri"}/>
          <HomeSectionCarousel data={akali} sectionName={"Akali"}/>
          <HomeSectionCarousel data={ahri} sectionName={"Annie"}/>
        </div>
    </div>
  )
}

export default HomePage