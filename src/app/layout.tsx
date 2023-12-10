'use client'
import './globals.css'
import { ThemeProvider } from '@emotion/react'
import { defaultSkieTheme } from 'src/styles/mui/defaultTheme'
import { StyledEngineProvider, Typography } from '@mui/material'
import { TopNavbar } from '@components/index'

export default function RootAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600;700&family=Dela+Gothic+One&family=Unbounded:wght@400;500;600;700&family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,800;0,900;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={defaultSkieTheme}>
            <TopNavbar />
            <div className="h-full">
              <main className="relative z-[10]">{children}</main>
              <footer className="bg-slate-700 p-[2em] flex flex-col gap-[2em] pt-[10vh] rounded-t-[50%_20vh]">
                <Typography variant="body1" color="white" textAlign={'center'}>
                  Thanks for visiting - Lets build your dream project sooner
                </Typography>
                <Typography
                  variant="caption"
                  color="white"
                  textAlign={'center'}
                  className="tracking-[3px]"
                >
                  Copyright &copy; - 2023 SKIE - the next generation is here
                </Typography>
              </footer>
            </div>
          </ThemeProvider>
        </StyledEngineProvider>
      </body>
    </html>
  )
}
