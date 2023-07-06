import { create } from "zustand"
import { persist } from "zustand/middleware"

interface DefaultState {
  results: number[]
  stack: number[]
  current: number
  setResult: (val: DefaultState["results"]) => void
  setCurrent: (val: DefaultState["current"]) => void
  setStack: (val: DefaultState["stack"]) => void
}

export const useDefaultStore = create<DefaultState>()(
  persist(
    (set) => ({
      results: [],
      stack: [],
      current: 0,
      setResult: (val: DefaultState["results"]) =>
        set(() => ({ results: val })),
      setCurrent: (val: DefaultState["current"]) =>
        set(() => ({ current: val })),
      setStack: (val: DefaultState["stack"]) => set(() => ({ stack: val })),
    }),
    {
      name: "qrate-result",
    }
  )
)
