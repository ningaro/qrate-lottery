'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { WindowButton } from '@/components/window/window-button'
import { Window } from '@/components/window'
import { WindowTag } from '@/components/window/window-tag'
import { WindowWin } from '@/components/window/window-win'
import { useDefaultStore } from '@/stores/default'

interface ResultsBodyProps {
  data: number[]
}

export const ResultsBody = ({ data }: ResultsBodyProps) => {
  const setResult = useDefaultStore(({ setResult }) => setResult)
  const setCurrent = useDefaultStore(({ setCurrent }) => setCurrent)
  const current = useDefaultStore(({ current }) => current)
  const results = useDefaultStore(({ results }) => results)

  const route = useRouter()

  useEffect(() => {
    setResult(data)
    setCurrent(0)
  }, [data, setCurrent, setResult])

  return (
    <Window headerText="Квантовая лотерея">
      <WindowTag>
        {current + 1} / {results.length}
      </WindowTag>
      <WindowWin num={results[current]} />
      {
        <WindowButton
          onClick={
            current + 1 === results.length
              ? () => route.push('/winner')
              : () => {
                  setCurrent(current + 1)
                }
          }
        >
          Дальше
        </WindowButton>
      }
    </Window>
  )
}
