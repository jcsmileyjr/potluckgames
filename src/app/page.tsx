import { getFood } from "./actions/getFood";
import { UserSummary } from "./components/Types";
import Header from "./layout/Header/Header";
import AddDish from "./components/AddDish/AddDish";
import ViewDishes from "./components/ViewDishes/ViewDishes";
import UpdateDish from "./components/UpdateDish/UpdateDish";

export default async function Home() {
  const data: UserSummary[] = await getFood() as UserSummary[];
  return (
    <div className="bg-white h-screen">
      <Header />
      <main className="flex flex-col bg-white">
        <AddDish />
        <ViewDishes data={data} />
        <UpdateDish />
      </main>

    </div>
  );
}
