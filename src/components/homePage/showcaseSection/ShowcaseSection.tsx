import {
  projectImage1,
  projectImage2,
  projectImage3,
  projectImage4,
} from '@assets/index'
import { SecLayout, TextOverImgHover } from '@components/index'
import { Box } from '@mui/material'
import { StaticImageData } from 'next/image'
import React from 'react'

type ProjectDataType = {
  name: string
  type: 'Web app' | 'Mobile App' | 'Desktop app'
  imageUrl: StaticImageData
  domainUrl: string
}
const projectsArr: ProjectDataType[] = [
  {
    name: 'Tracesit',
    type: 'Web app',
    imageUrl: projectImage1,
    domainUrl: 'https://tracesit.com/',
  },
  {
    name: 'Kyyros',
    type: 'Web app',
    imageUrl: projectImage2,
    domainUrl: 'https://app.kyyros.com/',
  },
  {
    name: 'RAAISA',
    type: 'Web app',
    imageUrl: projectImage3,
    domainUrl: 'https://raaisa.uem.edu.in/',
  },
  {
    name: 'Buyit',
    type: 'Web app',
    imageUrl: projectImage4,
    domainUrl: 'https://buyittheclassicmobiles.vercel.app/',
  },
]

const arr = [1, 2, 3, 4, 5, 6]
const ShowcaseSection = () => {
  return (
    <SecLayout label="Our Successes">
      <div className="grid grid-cols-2 auto-rows-auto gap-[0.5em]">
        {projectsArr.map((el, i) => (
          <Box
            className="w-full aspect-[3/2] bg-cyan-400 rounded-[10px] flex items-center justify-center overflow-hidden border-[2px] border-black"
            border={2}
            borderColor={'primary'}
          >
            <TextOverImgHover {...el} bgColorClassName="bg-transparent">
              <div>Hi there</div>
            </TextOverImgHover>
          </Box>
        ))}
      </div>
    </SecLayout>
  )
}

export default ShowcaseSection
