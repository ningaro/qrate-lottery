import styled, { keyframes } from "styled-components"
import Image from "next/image"

// Create the keyframes
const move = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(-150%);
  }
`

const Marquee = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;
  position: relative;
`

const MarqueeContent = styled.div<{ delay?: number }>`
  display: flex;
  padding-left: 100%;
  animation: ${move} 15s linear ${(props) => props.delay || 0}s infinite;
`

export function MarqueeIcons({ delay }: { delay?: number }) {
  return (
    <div style={{ position: "absolute", height: "100px", width: "100%" }}>
      <Marquee>
        <MarqueeContent delay={delay}>
          <Image src="sponsors.svg" alt="Спонсоры" width={500} height={100} />
        </MarqueeContent>
      </Marquee>
    </div>
  )
}
