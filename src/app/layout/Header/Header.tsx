
export default function Header() {
    return (
        <section className="relative" >
          <div className="h-80 w-full absolute inset-0 opacity-20 aspect-square bg-no-repeat  bg-cover bg-center bg-[url('/primaryimage.jpeg')] "></div>
          <div className="h-80 relative z-10 flex flex-col justify-around">
            <h1 className="text-accentRed font-bold text-center text-4xl py-2">Potluck & Games</h1>
            <div className="px-12 flex flex-col gap-1 text-black">
              <p className="text-xl">End of the year Celebration Meal with fellow Tech Professionals</p>
              <p className="text-base">FedEx Institute of Technology @ The University of Memphis</p>
              <p className="text-base">Nov. 22nd @ 6pm</p>
            </div>
            <div className="px-12 mt-4 flex flex-col gap-3 text-black">
                <button type="button" className="bg-accentRed text-white py-2 px-4 rounded-md">Meetup.com Registration</button>
            </div>
          </div>
        </section>
    );
}