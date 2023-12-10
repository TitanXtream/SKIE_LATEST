import { Button } from '@mui/material'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type SkieButtonVarients = 'contained' | 'outlined'
type SkieButtonProps = {
  varient: SkieButtonVarients
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
const SkieButton = ({ className }: SkieButtonProps) => {
  //   return <Button className=""></Button>
  return <div></div>
}

export default SkieButton
