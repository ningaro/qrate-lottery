"use client"
import "./global.css"
import { useCallback } from "react"
import Particles from "react-particles"
import type { Container, Engine } from "tsparticles-engine"
import { loadFull } from "tsparticles"
import StyledComponentsRegistry from "@/lib/registry"

/* export const metadata = {
  title: "QRate - Лотерея",
  description: "",
} */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine)

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container)
    },
    []
  )

  return (
    <html lang="ru">
      <body>
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
                value: "#ffffff",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "img/github.svg",
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
                // TODO анимация делает так, что они исчезают
                /* anim: {
                  enable: true,
                  speed: 19.489853095232284,
                  size_min: 0,
                  sync: false,
                }, */
              },
              line_linked: {
                enable: true,
                distance: 189.39543399174545,
                color: "#00a2ff",
                opacity: 1,
                width: 1,
              },
              move: {
                enable: true,
                speed: 6,
                direction: "right",
                random: false,
                straight: false,
                out_mode: "out",
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
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
