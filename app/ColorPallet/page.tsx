import Link from 'next/link';

export default function Home() {
    return (
        <main>

            <div className="z-30 relative items-center justify-center w-full h-full overflow-auto">
                <div className={`absolute top-0 inset-0 h-screen bg-cover bg-center backgroundImage`}>
                </div>
                <div className="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div>
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center">
                    <div className={`shadow-2xl rounded-lg w-4/5 h-96 backgroundImage`}>
                        <div className="grid grid-cols-12 gap-1">
                            <div className="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                                <div className="flex justify-between border-l-4 border-gray-400 py-20 px-5 mx-2  left-0">

                                    <div className="w-[200px] h-[200px]  bg-green-200">
                                        #CCF2D1
                                    </div>
                                    <div className="w-[200px] h-[200px]   bg-emerald-400">
                                        #074943
                                    </div>
                                    <div className="w-[200px] h-[200px]   bg-teal-600">
                                        #0C735E
                                    </div>
                                    <div className="w-[200px] h-[200px]  bg-emerald-700">
                                        #59CEA0
                                    </div>
                                    <div className="w-[200px] h-[200px]  bg-slate-200">
                                        #1B9676
                                    </div>

                                    <div className="w-[200px] h-[200px]   bg-emerald-900">
                                        #DFF3EF
                                    </div>

                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                                <div className="relative  bg-teal-600 h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
                                    <div className="p-8">
                                        <p className="text-white text-xs md:text-sm lg:text-xl mb-4">
                                            The lighter colors were chosen as they were a soothing green color. It is commonly used to represent nature, tranquility, and eco-friendliness.
                                        </p>
                                        <p className="text-white text-xs md:text-sm lg:text-xl mb-4">
                                            While the darker colors  create a sense of mystery and exploration, which is appeals to our adventurist demographic. This can be used for headings or backgrounds.
                                        </p>
                                        <div className="flex justify-around p-2 right-0">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}