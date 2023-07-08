'use client'

import Marquee from 'react-fast-marquee'
import styled from 'styled-components'

const ScrollingImage = styled.img`
  height: 2rem;
  margin-inline: 2rem;
`

interface MarqueeImageProps {
  src: React.ComponentProps<'img'>['src']
}

export const MarqueeImage = ({ src }: MarqueeImageProps) => {
  return (
    <Marquee autoFill={true} speed={30} direction="right">
      <ScrollingImage src={src} />
    </Marquee>
  )
}
