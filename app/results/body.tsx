"use client"

import { WindowButton } from "@/components/window/window-button"
import { Window } from "@/components/window"
import { WindowTag } from "@/components/window/window-tag"
import { WindowWin } from "@/components/window/window-win"
import { useEffect } from "react"
import { useDefaultStore } from "@/stores/default"
import { redirect } from "next/navigation"
import { RedirectType } from "next/dist/client/components/redirect"
import { WindowLink } from "@/components/window/window-link"

interface ResultsBodyProps {
  data: number[]
}

export const ResultsBody = ({ data }: ResultsBodyProps) => {
  const setResult = useDefaultStore(({ setResult }) => setResult)
  const setCurrent = useDefaultStore(({ setCurrent }) => setCurrent)
  const current = useDefaultStore(({ current }) => current)
  const results = useDefaultStore(({ results }) => results)

  useEffect(() => {
    setResult(data)
    setCurrent(0)
    console.log(data)
  }, [data, setCurrent, setResult])

  return (
    <Window headerText="Квантовая лотерея">
      <WindowTag>
        {current + 1} / {results.length}
      </WindowTag>
      <WindowWin num={results[current]} />
      {current + 1 === results.length ? (
        <WindowLink href="/winner">Дальше</WindowLink>
      ) : (
        <WindowButton
          onClick={() => {
            setCurrent(current + 1)
          }}
        >
          Дальше
        </WindowButton>
      )}
    </Window>
  )
}
