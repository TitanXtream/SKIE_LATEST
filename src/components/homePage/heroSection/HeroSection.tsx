import { Button, Divider, Typography } from '@mui/material'
import React from 'react'
import montserrat from 'src/styles/fonts/Montserrate'

const HeroSection = () => {
  return (
    <section className="relative w-full h-[140vh] pt-[5em]">
      <video
        className="absolute top-0 inset-x-0 w-full h-full object-cover rounded-b-[50%_40vh]"
        autoPlay
        muted
        loop
      >
        <source src={'/skie_hero_bg_video.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 inset-x-0 w-full h-full z-[2] bg-black/50 rounded-b-[50%_40vh]"></div>

      <div className="relative h-full w-full z-[5]">
        <div
          className={`flex flex-col items-center justify-center h-[calc(100vh_-_5em)] w-full  pb-[5em]`}
        >
          <div className={`${montserrat.className}`}>
            <h3 className="text-[7em] font-black leading-[100%] text-white">
              SKIE : IT-SERVICE
            </h3>
            <Divider className="bg-white/50 h-[2px]" variant="fullWidth" />
            <Typography
              color={'white'}
              variant="h5"
              component={'p'}
              className={`tracking-[1px] ${montserrat.className} text-center w-full`}
            >
              Lets start building your future dream product just after finishing
              this cup of tea
            </Typography>
          </div>
          <Button
            variant="outlined"
            // className="w-fit px-[2em] py-[0.5em] rounded-[5px] font-semibold bg-black/50 text-white"

            className="mt-[2em] font-semibold text-[2em] text-white border-white rounded-[40px]"
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
