import Header from "./layout/Header/Header";
import AddDish from "./components/AddDish/AddDish";
import ViewDishes from "./components/ViewDishes/ViewDishes";

export default async function Home() {
  return (
    <div className="bg-white h-screen">
      <Header />
      <main className="flex flex-col bg-white">
        <AddDish />
        <ViewDishes />
      </main>
    </div>
  );
}
