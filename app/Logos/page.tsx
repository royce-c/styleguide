import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="z-30 relative items-center justify-center w-full h-full overflow-auto">
        <div className={`absolute top-0 inset-0 h-screen bg-cover bg-center backgroundImage`}> </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div>
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center">
          <div className={` shadow-2xl rounded-lg w-4/5 h-96 backgroundImage`}>
            <div className="flex justify-between relative  col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
              <div className="  flex justify-between">
                <div className="border-l-4 border-gray-400 py-20 px-5 mx-2 absolute left-0">

                  <div className='flex justify-around'>
                    <img src="logo1.png" width="100" height="100" className="overflow-hidden"></img>
                    <img src="logo2.png" width="100" height="100" className="overflow-hidden"></img>
                    <img src="logo3.png" width="100" height="100" className="overflow-hidden"></img>
                    <img src="logo4.png" width="100" height="100" className="overflow-hidden"></img>
                  </div>

                  <div className='flex flex-row justify-around'>
                    <img src="logo1color.png" width="100" height="100" className="overflow-hidden"></img>
                    <img src="logo2color.png" width="100" height="100" className="overflow-hidden"></img>
                    <img src="logo3color.png" width="100" height="100" className="overflow-hidden"></img>
                    <img src="logo4color.png" width="100" height="100" className="overflow-hidden"></img>
                  </div>

                </div>
              </div>
              <div className="flex justify-start items-end relative w-1/2 col-span-12 sm:col-span-12 left-0 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                <div className=" bg-teal-600 items-end md:h-96  bg-opacity-50 rounded-lg ">
                  <p className="text-slate-300 text-xs md:text-sm lg:text-xl mb-4 pt-4">
                    For the Icons that we selected from HeroIcons. We have chosen to keep them smaller as they are mainly for navigation.
                  </p>
                  <p className="text-slate-300 text-xs md:text-sm lg:text-xl mb-4">
                    While the images containers we have made bigger as it attracts attention and keeps user engaged
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}