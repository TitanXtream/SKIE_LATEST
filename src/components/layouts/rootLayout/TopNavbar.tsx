import * as React from 'react'
import { LogoVariant1Svg } from '@assets/index'
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Menu,
  MenuItem,
  Slide,
  Toolbar,
  useScrollTrigger,
} from '@mui/material'

const topNavItems: {
  label: string
  url: string
}[] = [
  {
    label: 'About us',
    url: '#about-us',
  },
  {
    label: 'Products',
    url: '#products',
  },
  {
    label: 'Services',
    url: '#services',
  },
  {
    label: 'Contact us',
    url: 'contact-us',
  },
]
interface Props {
  window?: () => Window
  children: React.ReactElement
}

function HideOnScroll(props: Props) {
  const { children, window } = props

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function TopNavbar() {
  return (
    <>
      <CssBaseline />
      <HideOnScroll>
        <AppBar className="bg-transparent shadow-none">
          <Toolbar
            component={'nav'}
            className="h-full w-full flex justify-center items-center py-[0.5em] px-[2em] bg-gradient-to-b from-black/50 to-transparent backdrop-blur"
          >
            <LogoVariant1Svg className={'h-[4em] w-auto'} />

            {/* <Menu open>
              <MenuItem>Products</MenuItem>
            </Menu> */}
            {/* <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '1em' }}>
              {topNavItems.map((item) => (
                <Button
                  variant="outlined"
                  className="font-semibold tracking-[2px] text-white border-white"
                  key={item.url}
                >
                  {item.label}
                </Button>
              ))}
            </Box> */}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {/* <Toolbar className="h-[5em]">zdkjhb</Toolbar> */}
    </>
  )
}
