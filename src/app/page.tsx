import Image from "next/image";
import Header from "./layout/Header/Header";

export default function Home() {
  return (
    <div className="bg-white h-screen">
      <Header />
      <main className="">
        Hello World
      </main>

    </div>
  );
}
