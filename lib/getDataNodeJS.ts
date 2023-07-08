export async function getDataNodeJS(
  minValue: number,
  maxValue: number,
  amount: number
): Promise<number[]> {
  const res = await fetch(
    `https://qrate-lottery.vercel.app/api?minValue=${minValue}&maxValue=${maxValue}&amount=${amount}&isUnique=true`,
    { cache: 'no-store' }
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
