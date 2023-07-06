export async function getDataFromServer(
  link: string,
  minValue: number,
  maxValue: number,
  amount: number
): Promise<number[]> {
  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")

  const raw = JSON.stringify({
    min_value: minValue,
    max_value: maxValue,
    amount,
    is_unique: true,
  })

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  }

  const res = await fetch(link, {
    ...requestOptions,
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}
