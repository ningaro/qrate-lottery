'use client'

import { ReactNode } from 'react'
import styled from 'styled-components'
import { WindowBody } from './window-body'
import { WindowHeader } from './window-header'
import { WindowRoot } from './window-root'

interface WindowProps {
  headerText?: string
  children: ReactNode
  isHeaderShow?: boolean
  isCentred?: boolean
}

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
`

export const Window = ({
  headerText,
  children,
  isCentred = true,
  isHeaderShow = true,
}: WindowProps) => {
  return (
    <>
      {isCentred ? (
        <Center>
          <WindowRoot>
            {isHeaderShow && <WindowHeader>{headerText}</WindowHeader>}
            <WindowBody>{children}</WindowBody>
          </WindowRoot>
        </Center>
      ) : (
        <WindowRoot>
          {isHeaderShow && <WindowHeader>{headerText}</WindowHeader>}
          <WindowBody>{children}</WindowBody>
        </WindowRoot>
      )}
    </>
  )
}
