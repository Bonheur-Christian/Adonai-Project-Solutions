import sanityClient from '@sanity/client'

const client = sanityClient({
    projectId: import.meta.env.VITE_PROJECT_ID,
    dataset: import.meta.env.VITE_DATASET,
    useCdn: true,
    apiVersion: '2023-06-07',
    token: import.meta.env.VITE_SANITY_TOKEN,
})

export default client;