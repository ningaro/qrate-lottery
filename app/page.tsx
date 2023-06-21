"use client"

import { Block } from "@/components/block"
import { MarqueeIcons } from "@/components/marquee-icons"
import { styled } from "styled-components"

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
`
const Bottom = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
`

export default function Home() {
  return (
    <div>
      <Center>
        <Block></Block>
      </Center>
      <Bottom>
        <div style={{ position: "relative", width: "100%", height: "100px" }}>
          <MarqueeIcons />
          <MarqueeIcons delay={3} />
          <MarqueeIcons delay={6} />
          <MarqueeIcons delay={9} />
          <MarqueeIcons delay={12} />
          <MarqueeIcons delay={15} />
        </div>
      </Bottom>
    </div>
  )
}
