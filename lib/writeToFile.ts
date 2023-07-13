import { appendFileSync } from 'fs'

export const writeToFile = (obj: any) => {
  const str = JSON.stringify(obj)

  const actualDate = new Date()
  const date = actualDate.toLocaleDateString('ru')
  const time = actualDate.toLocaleTimeString('ru')

  try {
    appendFileSync(
      `./log/${date.replaceAll('.', '-')}.txt`,
      `[${date}, ${time}] - ${str}\n`
    )
  } catch (error) {
    console.error('Error on saving results!', error)
  }
}
