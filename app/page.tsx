'use client'

import { useState } from 'react'
import { styled } from 'styled-components'
import { Window } from '@/components/window'
import { Input } from '@/components/input'
import { WindowLink } from '@/components/window/window-link'

const Spacer = styled.div`
  flex: 1;
`

const Inputs = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 2rem;
  width: 40%;
`

const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`

export default function Home() {
  const [firstValue, setFirstValue] = useState<string>('')
  const [lastValue, setLastValue] = useState<string>('')
  const [amount, setAmount] = useState<string>('')

  return (
    <Window headerText="Квантовая лотерея">
      <Spacer />
      <Inputs>
        <Input
          inputTitle="Первый билет"
          inputValue={firstValue}
          inputUpdateValue={setFirstValue}
        />
        <Input
          inputTitle="Последний билет"
          inputValue={lastValue}
          inputUpdateValue={setLastValue}
        />
        <Input
          inputTitle="Количество призов"
          inputValue={amount}
          inputUpdateValue={setAmount}
        />
      </Inputs>
      <ButtonWrapper>
        <WindowLink
          href={`/results?minValue=${firstValue}&maxValue=${lastValue}&amount=${amount}`}
        >
          Запуск
        </WindowLink>
      </ButtonWrapper>
    </Window>
  )
}
