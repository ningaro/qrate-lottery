import { ResultsBody } from "./body"

async function getData(
  minValue: number,
  maxValue: number,
  amount: number
): Promise<number[]> {
  const res = await fetch(
    `https://qrate-lottery.vercel.app/api?minValue=${minValue}&maxValue=${maxValue}&amount=${amount}&isUnique=true`,
    { cache: "no-store" }
  )
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function Results({
  searchParams,
}: {
  searchParams: { [key: string]: number }
}) {
  const minValue = searchParams["minValue"]
  const maxValue = searchParams["maxValue"]
  const amount = searchParams["amount"]

  const data = await getData(minValue, maxValue, amount)

  return <ResultsBody data={data} />
}
