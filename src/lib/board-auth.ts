import { headers as getHeaders } from 'next/headers'
import { getPayloadClient } from './payload'

export async function getAuthorizedBoard(slug: string) {
  const payload = await getPayloadClient()
  const boardRes = await payload.find({ collection: 'boards', where: { slug: { equals: slug } }, limit: 1 })
  const board = boardRes.docs[0]
  if (!board) return { board: null, authorized: false }

  let authorized = board.accessLevel === 'public'
  if (!authorized) {
    const { user } = await payload.auth({ headers: await getHeaders() })
    authorized = !!user
  }
  return { board, authorized }
}
