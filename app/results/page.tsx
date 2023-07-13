import { getDataNodeJS } from '@/lib/getDataNodeJS'
import { getDataFromServer } from '@/lib/getDataFromServer'
import { ResultsBody } from './body'

export default async function Results({
  searchParams,
}: {
  searchParams: { [key: string]: number }
}) {
  const isProdMode = process.env.NEXT_PUBLIC_MODE === 'prod'
  const minValue = searchParams['minValue']
  const maxValue = searchParams['maxValue']
  const amount = searchParams['amount']

  const data = isProdMode
    ? await getDataFromServer(
        process.env.SERVER || '',
        minValue,
        maxValue,
        amount
      )
    : await getDataNodeJS(minValue, maxValue, amount)

  return <ResultsBody data={data} />
}
