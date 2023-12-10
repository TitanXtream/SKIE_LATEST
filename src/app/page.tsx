import { LogoVariant1Svg } from '@assets/index'
import ShowcaseSection from '@components/homePage/showcaseSection/ShowcaseSection'
import { AboutUsSection, HeroSection } from '@components/index'
import { Button } from '@mui/material'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Skie',
  description: 'IT - service',
}

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-[4em] pb-[6em]">
      <HeroSection />
      <ShowcaseSection />
      {/* <HeroImage /> */}
      {/* HERO */}
      {/* WHY SKIE */}
      {/* SUCCESS */}
      {/* TECH STACKS */}
      {/* FAQS */}
      <AboutUsSection />
      {/* CONTACT US */}
    </div>
  )
}
