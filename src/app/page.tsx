import Image from "next/image";
import Header from "./layout/Header/Header";
import AddDish from "./components/AddDish/AddDish";
import ViewDishes from "./components/ViewDishes/ViewDishes";
import UpdateDish from "./components/UpdateDish/UpdateDish";

export default function Home() {
  return (
    <div className="bg-white h-screen">
      <Header />
      <main className="flex flex-col bg-white">
        <AddDish />
        <ViewDishes />
        <UpdateDish />
      </main>

    </div>
  );
}
