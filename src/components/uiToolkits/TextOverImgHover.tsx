import { Box } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
const imageUrl =
  'https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww&w=1000&q=80'
//   { imageUrl, title, date, sharelink,types,helperText }

type Props = {
  bgColorClassName: string
  children: ReactNode
  imageUrl: StaticImageData
  domainUrl: string
}

const TextOverImgHover = ({
  bgColorClassName,
  imageUrl,
  children,
  domainUrl,
}: Props) => {
  return (
    <a
      href={domainUrl}
      target="_blank"
      className="w-full h-full overflow-hidden"
    >
      <figure
        className={twMerge(
          'bg-red-300',
          bgColorClassName,
          'relative w-full h-full group flex items-center',
        )}
      >
        {/* <img
          src={imageUrl}
          className="absolute z-[1] w-full h-full object-cover filter"
          style={{ opacity: 0.9 }}
        /> */}
        <Image
          alt=""
          src={imageUrl}
          className="z-[1] w-full h-full object-cover object-top"
        />
        <Box
          component={'figcaption'}
          className="group-hover:flex flex-col hidden absolute top-0 left-0 z-[10] w-full h-full items-center justify-center bg-primary/70 text-white p-[1em]"
          id="fig-capture"
        >
          {children}
        </Box>
      </figure>
    </a>
  )
}

export default TextOverImgHover
