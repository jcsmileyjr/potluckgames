import Link from "next/link";
export default function Header() {
    return (
        <header className="relative px-4 pb-8" >
          {/* Mobile View */}
          <div className="sm:hidden h-80 w-full absolute inset-0 opacity-50 aspect-square bg-no-repeat  bg-cover bg-center bg-[url('/primaryimage.jpeg')] "></div>
          <div className="sm:hidden h-80 relative z-10 flex flex-col">
            <h1 className="text-accentRed font-bold text-center text-4xl py-2 mt-8">Potluck & Games</h1>
          </div>
          <div className="sm:hidden flex flex-col gap-1 text-black  mt-2">
              <p className="text-xl">End of the year Celebration Meal with fellow Tech Professionals</p>
              <p className="text-base">FedEx Institute of Technology @ The University of Memphis</p>
              <p className="text-base">Nov. 22nd @ 6pm</p>
          </div>

          {/* Desktop View */}
          <div className="hidden sm:flex sm:flex-col sm:gap-4">
            <h1 className="text-accentRed font-bold text-center text-4xl py-2 mt-8">Potluck & Games</h1>
            <div className="sm:flex sm:flex-row sm:gap-4 lg:w-1/2 mx-auto">
                <div className="flex flex-col gap-1 justify-between">
                  <div>
                    <p className="text-xl mb-4 text-primaryBrown font-bold">End of the year Celebration Meal with fellow Tech Professionals</p>
                    <>
                      <p className="text-base text-black">FedEx Institute of Technology @ The University of Memphis</p>
                      <p className="text-base text-black">Nov. 22nd @ 6pm</p> 
                    </>
                  </div>
                  <div className="mt-4 flex flex-col gap-3 text-black">
                  <Link legacyBehavior href="https://www.meetup.com/memphis-technology-user-groups/events/304367440" >                  
                    <a className="text-center bg-accentRed text-white py-2 px-4 rounded-md" target="_blank" rel="noopener noreferrer">
                    Meetup.com Registration
                    </a>
                  </Link>
                  </div>
                </div>
                <div className="w-2/3 2xl:w-1/2 inset-0 aspect-square bg-no-repeat  bg-cover bg-center bg-[url('/primaryimage.jpeg')]"></div>
            </div>
          </div>
          <div className="sm:hidden mt-4 flex flex-col gap-3 text-black">
              <Link legacyBehavior href="https://www.meetup.com/memphis-technology-user-groups/events/304367440" className="bg-accentRed text-white py-2 px-4 rounded-md">
              <a className="text-center bg-accentRed text-white py-2 px-4 rounded-md" target="_blank" rel="noopener noreferrer">
                Meetup.com Registration
              </a>
              </Link>
          </div>
        </header>
    );
}