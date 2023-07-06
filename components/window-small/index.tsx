"use client"

import { ReactNode } from "react"
import { WindowRoot } from "./window-root"

interface WindowProps {
  headerText?: string
  children: ReactNode
  isHeaderShow?: boolean
  isCentred?: boolean
}

export const WindowSmall = ({
  headerText,
  children,
  isCentred = true,
  isHeaderShow = true,
}: WindowProps) => {
  return <WindowRoot>{children}</WindowRoot>
}
