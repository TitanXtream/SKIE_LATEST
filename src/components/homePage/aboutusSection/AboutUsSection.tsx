import { AbouttUsContent } from '@assets/dummyData'
import { SecLayout } from '@components/index'
import { Typography } from '@mui/material'
import React from 'react'

const AboutUsSection = () => {
  return (
    <SecLayout label={AbouttUsContent.label}>
      <div className="flex flex-col gap-[2em]">
        {AbouttUsContent.content.map((par, i) => (
          <Typography key={i} variant="h6" className="text-justify">
            {par}
          </Typography>
        ))}
      </div>
    </SecLayout>
  )
}

export default AboutUsSection
