'use client'

import { useEffect, useMemo } from 'react'
import { styled } from 'styled-components'
import { useDefaultStore } from '@/stores/default'

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
const WinnersText = styled.h1`
  color: #fff;
  font-size: 3rem;
  font-family: var(--font-gilroy);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0px;
`

const WinnersTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
`

const WindowWinnersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`

export const WindowWinners = () => {
  const current = useDefaultStore(({ current }) => current)
  const setCurrent = useDefaultStore(({ setCurrent }) => setCurrent)
  const results = useDefaultStore(({ results }) => results)
  const stack = useDefaultStore(({ stack }) => stack)
  const setStack = useDefaultStore(({ setStack }) => setStack)

  const resultsCropped = useMemo(() => {
    const { length } = results

    return results.reduce(
      (prev, cur) => {
        let isUsed = false
        return prev.map((arr) => {
          if (arr.length < 3 && !isUsed) {
            isUsed = true
            return [...arr, cur]
          } else return [...arr]
        })
      },
      JSON.parse(
        JSON.stringify(new Array(Math.ceil(length / 3)).fill([]))
      ) as Array<number>[]
    )
  }, [results])

  useEffect(() => {
    const switcher = setInterval(() => {
      if (current + 1 < results.length) {
        setCurrent(current + 1)
        setStack(resultsCropped[Math.trunc((current + 1) / 3)])
      } else {
        setCurrent(0)
        setStack(resultsCropped[0])
      }
    }, 3000)

    return () => clearInterval(switcher)
  }, [current, results, results.length, resultsCropped, setCurrent, setStack])

  return (
    <WindowWinnersWrapper>
      <WinnerUpperText>Победитель:</WinnerUpperText>
      <WinnerText>{results[current]}</WinnerText>
      <WinnersTextWrapper>
        {stack.map((val) => (
          <WinnersText key={val}>{val}</WinnersText>
        ))}
      </WinnersTextWrapper>
    </WindowWinnersWrapper>
  )
}
