import { SanityClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config()

const client = SanityClient({
  projectId: 'mhr6gb61',
  dataset: 'production',
  useCdn: true,
  token: process.env.SANITY_TOKEN_APS
})

export default client;