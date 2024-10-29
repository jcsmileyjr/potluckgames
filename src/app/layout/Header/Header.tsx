
export default function Header() {
    return (
        <header className="relative px-4 pb-8 border-b border-primaryBrown border-solid" >
          {/* Mobile View */}
          <div className="lg:hidden h-80 w-full absolute inset-0 opacity-50 aspect-square bg-no-repeat  bg-cover bg-center bg-[url('/primaryimage.jpeg')] "></div>
          <div className="lg:hidden h-80 relative z-10 flex flex-col">
            <h1 className="text-accentRed font-bold text-center text-4xl py-2 mt-8">Potluck & Games</h1>
          </div>
          <div className="lg:hidden flex flex-col gap-1 text-black  mt-2">
              <p className="text-xl">End of the year Celebration Meal with fellow Tech Professionals</p>
              <p className="text-base">FedEx Institute of Technology @ The University of Memphis</p>
              <p className="text-base">Nov. 22nd @ 6pm</p>
          </div>

          {/* Desktop View */}
          <div className="hidden lg:flex lg:flex-col lg:gap-4">
            <h1 className="text-accentRed font-bold text-center text-4xl py-2 mt-8">Potluck & Games</h1>
            <div className="lg:flex lg:flex-row lg:gap-4 w-2/3 mx-auto">
                <div className="flex flex-col gap-1 text-black justify-between">
                  <div>
                    <p className="text-xl mb-4">End of the year Celebration Meal with fellow Tech Professionals</p>
                    <>
                      <p className="text-base">FedEx Institute of Technology @ The University of Memphis</p>
                      <p className="text-base">Nov. 22nd @ 6pm</p> 
                    </>
                  </div>
                  <div className="mt-4 flex flex-col gap-3 text-black">
                    <button type="button" className="bg-accentRed text-white py-2 px-4 rounded-md">Meetup.com Registration</button>
                  </div>
                </div>
                <div className="w-2/3 inset-0 aspect-square bg-no-repeat  bg-cover bg-center bg-[url('/primaryimage.jpeg')]"></div>
            </div>
          </div>
          <div className="lg:hidden mt-4 flex flex-col gap-3 text-black">
              <button type="button" className="bg-accentRed text-white py-2 px-4 rounded-md">Meetup.com Registration</button>
          </div>
        </header>
    );
}