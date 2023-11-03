/**
 * This file contains the root router of your tRPC-backend
 */
import { addAWishSchema } from '@/schema'
import { prisma } from '@/server/prisma'
import { publicProcedure, router } from '../trpc'

export const appRouter = router({
  getWishList: publicProcedure.query(async () => {
    return await prisma.wishList.findMany()
  }),
  getAWish: publicProcedure.query(async () => {
    return await prisma.wish.findMany()
  }),
  addAWish: publicProcedure
    .input(addAWishSchema)
    .mutation(async ({ input }) => {
      const { title, description, link } = input
      const result = await prisma.wish.create({
        data: {
          title: title,
          description: description,
          link: link,
        },
      })
      return {
        status: 201,
        message: 'Wish created successfully',
        result: result,
      }
    }),
})

export type AppRouter = typeof appRouter
