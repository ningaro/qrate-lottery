import { NextRequest, NextResponse } from 'next/server'

function generateRandomNumbers(
  minValue: number,
  maxValue: number,
  amount: number,
  isUnique: boolean
): number[] {
  if (isUnique && amount > maxValue - minValue + 1) {
    throw new Error(
      'Невозможно сгенерировать указанное количество уникальных чисел в заданном диапазоне.'
    )
  }

  let numbers: Set<number> | number[]

  if (isUnique) {
    numbers = new Set<number>()
  } else {
    numbers = []
  }

  while ((numbers as Set<number>).size < amount) {
    const newMin = Math.ceil(minValue)
    const newmMax = Math.floor(maxValue)
    const number = Math.floor(Math.random() * (newmMax - newMin + 1)) + newMin
    if (isUnique) {
      ;(numbers as Set<number>).add(number)
    } else {
      ;(numbers as number[]).push(number)
    }
  }

  return Array.from(numbers)
}

export async function GET(request: NextRequest) {
  const searchParams = new URL(request.url).searchParams
  const minValue = searchParams.get('minValue') as number | null
  const maxValue = searchParams.get('maxValue') as number | null
  const amount = searchParams.get('amount') as number | null
  const isUnique = searchParams.get('isUnique') as boolean | null

  if (minValue && maxValue && amount && isUnique)
    return NextResponse.json(
      generateRandomNumbers(minValue, maxValue, amount, true)
    )
  return NextResponse.json({ error: 'Random function parametrs error' })
}
