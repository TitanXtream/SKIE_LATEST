'use client'
import { LogoVariant1Svg } from '@assets/index'
import React from 'react'
import { HiOutlineChartSquareBar } from 'react-icons/hi'
import { BiBarChartSquare } from 'react-icons/bi'

const HeroImage = () => {
  return (
    <div className="w-full max-w-[30em] max-h-[26em] h-full">
      <LogoVariant1Svg className={'w-[20em] h-auto'} />
    </div>
  )
}

export default HeroImage
