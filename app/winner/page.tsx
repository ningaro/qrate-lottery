'use client'

import { styled } from 'styled-components'
import Image from 'next/image'
import { Window } from '@/components/window'
import { WindowSmall } from '@/components/window-small'
import { useDefaultStore } from '@/stores/default'
import { WindowTag } from '@/components/window/window-tag'
import { WindowWinners } from '@/components/window/window-winners'
import { WindowLink } from '@/components/window/window-link'

const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`

const WinnerPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 4rem;
`

export default function Winner() {
  const results = useDefaultStore(({ results }) => results)
  const current = useDefaultStore(({ current }) => current)

  return (
    <WinnerPageWrapper>
      <WindowSmall isHeaderShow={false} isCentred={false}>
        <Image src="/qrate.svg" width={153} height={32} alt="qrate logo" />
        <Image
          src="/qrate-link.svg"
          width={120}
          height={120}
          alt="qrate link"
        />
      </WindowSmall>
      <Window headerText="Квантовая лотерея" isCentred={false}>
        <WindowTag>
          {current + 1} / {results.length}
        </WindowTag>
        <WindowWinners />
        <ButtonWrapper>
          <WindowLink href="/">Завершить</WindowLink>
        </ButtonWrapper>
      </Window>
      <WindowSmall isHeaderShow={false} isCentred={false}>
        <Image src="/gpb.svg" width={48} height={48} alt="gpb logo" />
        <Image src="/gpb-link.svg" width={120} height={120} alt="gpb link" />
      </WindowSmall>
    </WinnerPageWrapper>
  )
}
