import { trpc } from '@/utils/trpc'

export default function IndexPage() {
  const wish = trpc.getAWish.useQuery()

  if (!wish.data) {
    return 'No data'
  }

  console.log(wish.data)

  return <div>Heellooo</div>
}
