
export default function Header() {
    return (
        <section className="relative" >
          <div className="h-80 w-full absolute inset-0 opacity-20 aspect-square bg-no-repeat  bg-cover bg-center bg-[url('/primaryimage.jpeg')] "></div>
          <div className="h-80 relative z-10">
            <h1 className="text-accentRed font-bold text-center text-4xl py-2">Potluck & Games</h1>
            <div className="px-12 flex flex-col gap-3 text-black">
              <p className="text-xl">End of the year Celebration Meal with fellow Tech Professionals</p>
              <p className="text-bass">FedEx Institute of Technology @ The University of MemphisNov. 22nd @ 6pm</p>
              <p className="text-base">Don’t  forget to sign up on Meetup.com at thiswillbereplacewithsomething. </p>
            </div>
          </div>
        </section>
    );
}