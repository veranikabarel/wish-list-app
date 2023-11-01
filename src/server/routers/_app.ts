/**
 * This file contains the root router of your tRPC-backend
 */
import { prisma } from '@/server/prisma';
import { publicProcedure, router } from '../trpc';


export const appRouter = router({
    getWishList: publicProcedure
    .query(async () => {
      return await prisma.wishList.findMany()
    }),

});

export type AppRouter = typeof appRouter;