import { getPayload } from 'payload'
import config from '@payload-config'

let client: ReturnType<typeof getPayload> | null = null

export function getPayloadClient() {
  if (!client) client = getPayload({ config })
  return client
}
