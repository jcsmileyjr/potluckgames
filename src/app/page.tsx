import Image from "next/image";
import Header from "./layout/Header/Header";

export default function Home() {
  return (
    <div className="bg-white h-screen">
      {/* <Header /> */}
      <main className="">
        <section className="relative" >
          <div className="absolute inset-0 opacity-20 aspect-square bg-cover bg-center bg-[url('/primaryimage.jpeg')] "></div>
          <div className="relative z-10">
            <h1 className="text-accentRed font-bold text-center text-4xl py-2">Potluck & Games</h1>
            <div className="px-12 flex flex-col gap-3 text-primaryBrown">
              <p>End of the year Celebration Meal with fellow Tech Professionals</p>
              <p>FedEx Institute of Technology @ The University of MemphisNov. 22nd @ 6pm</p>
              <p>Don’t  forget to sign up on Meetup.com at thiswillbereplacewithsomething. </p>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
