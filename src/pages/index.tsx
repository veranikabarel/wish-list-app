import { trpc } from '../utils/trpc';

export default function IndexPage() {


  const wishList = trpc.getWishList.useQuery()

  console.log(wishList.data)

  if (!wishList.data) {
    return "No data"
  }

  return (
    <div>
    <p>{wishList.data.map((wish) => wish.id)}</p>
    </div>
  );
}