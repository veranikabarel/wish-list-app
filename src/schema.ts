import { z } from 'zod'

export const addAWishSchema = z.object({
  title: z.string(),
  description: z.string(),
  link: z.string(),
})

export type addAWishSchema = z.TypeOf<typeof addAWishSchema>
