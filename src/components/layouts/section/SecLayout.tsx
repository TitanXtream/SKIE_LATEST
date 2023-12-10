import { Typography } from '@mui/material'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  label: string
}

const SecLayout = ({ label, children }: Props) => {
  return (
    <section className="w-full px-[4em] py-[1em] flex flex-col gap-[4em]">
      <div>
        <Typography
          variant="h3"
          fontWeight={800}
          textAlign={'center'}
          className="tracking-[5px]"
        >
          {label}
        </Typography>
      </div>
      <div>{children}</div>
    </section>
  )
}

export default SecLayout
