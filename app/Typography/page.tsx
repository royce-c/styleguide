import Link from 'next/link';

export default function Home() {
  return (
    <main>

      <div className="z-30 relative items-center justify-center w-full h-full overflow-auto">
        <div className={`absolute top-0 inset-0 h-screen bg-cover bg-center backgroundImage`}>
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div>
        <div className="absolute inset-0 z-30 flex  items-center justify-around">
          <div className={`shadow-2xl rounded-lg w-4/5 h-96 backgroundImage`}>
            <div className="   grid-cols-12 gap-1">
              <div className="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                <div className="flex justify-between py-20 px-5 mx-2  left-0">
                  <div className="flex-col justify-between">

                    <div className="bg-opacity-0 flex-col justify-start items-start inline-flex ">
                      <div className="self-stretch flex-col justify-start items-start flex">
                        <div className="self-stretch  border-b-2 border-neutral-800 border-opacity-20 flex justify-start items-start gap-4 ">
                          <div>
                            <div className="self-stretch justify-start items-center gap-4 inline-flex">
                              <div className="px-[18px] py-1.5 bg-green-400 rounded-lg justify-center items-center flex">
                                <div className="text-neutral-800 text-lg font-medium font-['Poppins'] leading-tight">Large Title</div>
                              </div>
                            </div>
                            <div className="self-stretch text-white text-[32px] font-normal font-['Poppins'] leading-9">Poppins </div>
                            <div className="self-stretch text-white text-[32px] font-medium font-['Poppins'] leading-9">Poppins </div>
                          </div>

                          <div>
                            <div className="px-[18px] py-1.5 bg-green-400 rounded-lg justify-center items-center flex">
                              <div className="text-neutral-800 text-lg font-medium font-['Inter'] leading-tight">Headings</div>
                            </div>
                            <div className="self-stretch text-white text-[22px] font-normal font-['Poppins'] leading-normal">Poppins </div>
                            <div className="self-stretch text-white text-[22px] font-medium font-['Poppins'] leading-normal">Poppins </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="self-stretch  border-b-2 border-neutral-800 w-full border-opacity-20 flex-col justify-start items-start gap-4 flex">
                      <div className="self-stretch justify-start items-center gap-4 inline-flex">
                      </div>
                      <div className="self-stretch   border-b-2 border-neutral-800 border-opacity-20 flex-col justify-start items-start gap-4 flex">
                        <div className="self-stretch justify-start items-center gap-4 inline-flex">
                          <div className="px-[18px] py-1.5 bg-green-400 rounded-lg justify-center items-center flex">
                            <div className="text-neutral-800 text-lg font-medium font-['Inter'] leading-tight">Text</div>
                          </div>
                        </div>
                        <div className="self-stretch  text-white text-[15px] font-normal font-['Poppins'] leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare</div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full ">
                    <div className="relative  bg-teal-600 bg-opacity-50 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
                      <div className="p-8">
                        <p className="text-white text-xs md:text-sm lg:text-xl mb-4">
                        For typography we chose Poppins as it has a modern and friendly appearance, which aligns well with the branding of Where2Next. It conveys a sense of approachability and openness, making users feel comfortable and encouraged to explore.                                     </p>
                        <div className="flex justify-around p-2 right-0">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main >



  )
}
