'use client'
import './global.css'
import localFont from 'next/font/local'
import { useCallback } from 'react'
import Particles from 'react-particles'
import type { Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'
import StyledComponentsRegistry from '@/lib/registry'
import { BottomPartnersLogos } from '@/features/bottom-partners-logos'

const gilroyFont = localFont({
  src: [
    {
      path: '../public/fonts/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-gilroy',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async () => {}, [])

  return (
    <html lang="ru">
      <body className={gilroyFont.variable}>
        <StyledComponentsRegistry>
          <Particles
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                color: {
                  value: '#ffffff',
                },
                shape: {
                  type: 'circle',
                  stroke: {
                    width: 0,
                    color: '#000000',
                  },
                  polygon: {
                    nb_sides: 5,
                  },
                  image: {
                    src: 'img/github.svg',
                    width: 100,
                    height: 100,
                  },
                },
                opacity: {
                  value: 0.7776548495197786,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 10,
                    opacity_min: 0,
                    sync: false,
                  },
                },
                size: {
                  value: 3,
                  random: true,
                },
                line_linked: {
                  enable: true,
                  distance: 189.39543399174545,
                  color: '#00a2ff',
                  opacity: 1,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 6,
                  direction: 'right',
                  random: false,
                  straight: false,
                  out_mode: 'out',
                  bounce: false,
                  attract: {
                    enable: true,
                    rotateX: 78.91476416322726,
                    rotateY: 5366.203963099454,
                  },
                },
              },
              retina_detect: true,
            }}
          />
          <BottomPartnersLogos />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
