"use client"

import { styled } from "styled-components"

const WinnerUpperText = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  font-family: var(--font-gilroy);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0px;
  margin-bottom: 1rem;
`

const WinnerText = styled.h1`
  color: #fff;
  font-size: 6rem;
  font-family: var(--font-gilroy);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0px;
`

const WindowWinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

interface WindowWinProps {
  num: number
}

export const WindowWin = ({ num }: WindowWinProps) => {
  return (
    <WindowWinWrapper>
      <WinnerUpperText>Победитель:</WinnerUpperText>
      <WinnerText>{num}</WinnerText>
    </WindowWinWrapper>
  )
}
