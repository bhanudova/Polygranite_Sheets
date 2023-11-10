import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div className='flex justify-center items-center py-20' id='services'>
            <div>
                <h2 className='font-bold text-4xl text-center'>OUR SERVICES</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 py-6">
                    <div className="card w-72 md:w-72 lg:w-60 shadow-xl box bg-white pt-6 rounded-md border">
                        <div className='flex justify-center items-center'><Image width={1000} height={1000} src="/service_img1.jpg" alt="Shoes" className="w-[10rem] h-[10rem] rounded-md border" /></div>
                        <div className="text-center p-4 md:p-4 lg:p-3">
                            <div className="flex justify-center items-center">
                                <div className="bg-blue-50 rounded-full mt-[-50px] w-20 p-3">
                                    <Image src="/service_logo1.png" width={1000} height={1000} alt="Cow" />
                                </div>
                            </div>
                            <h2 className="py-2 font-bold text-sm md:text-base lg:text-xl">Polygranite Sheets</h2>
                        </div>
                    </div>
                    <div className="card  w-72 md:w-72 lg:w-60   shadow-xl box bg-white pt-6 rounded-md border">
                        <div className='flex justify-center items-center'><Image width={1000} height={1000} src="/service_img2.jpg" alt="seeds_card" className="w-[10rem] h-[10rem] rounded-md border" /></div>
                        <div className="text-center p-4 md:p-4 lg:p-3">
                            <div className="flex justify-center items-center">
                                <div className="bg-blue-50 rounded-full mt-[-50px] w-20 p-3">
                                    <Image src="/service_logo2.png" width={1000} height={1000} alt="seeds_logo" />
                                </div>
                            </div>
                            <h2 className="py-2 font-bold text-sm md:text-base lg:text-xl">WPC Panels</h2>
                        </div>
                    </div>
                    <div className="card w-72 md:w-72 lg:w-60 shadow-xl box bg-white pt-6 rounded-md border">
                        <div className='flex justify-center items-center'><Image width={1000} height={1000} src="/service_img3.jpg" alt="food_card" className="w-[10rem] h-[10rem] rounded-md border" /></div>
                        <div className="text-center p-4 md:p-4 lg:p-3">
                            <div className="flex justify-center items-center">
                                <div className="bg-blue-50 rounded-full mt-[-50px] w-20 p-3">
                                    <Image src="/service_logo3.png" width={1000} height={1000} alt="food_logo" />
                                </div>
                            </div>
                            <h2 className="py-2 font-bold text-sm md:text-base lg:text-xl">PVC wall Panels</h2>
                        </div>
                    </div>
                    <div className="card w-72 md:w-72 lg:w-60   shadow-xl box bg-white pt-6 rounded-md border">
                        <div className='flex justify-center items-center'><Image width={1000} height={1000} src="/service_img4.jpg" alt="tissue_culture_card" className="w-[10rem] h-[10rem] rounded-md border" /></div>
                        <div className="text-center p-4 md:p-4 lg:p-3">
                            <div className="flex justify-center items-center">
                                <div className="bg-blue-50 rounded-full mt-[-50px] w-20 p-4">
                                    <Image src="/service_logo4.png" width={1000} height={1000} alt="tissue_culture_logo" />
                                </div>
                            </div>
                            <h2 className="py-2 font-bold text-sm md:text-base lg:text-xl">3D wall Panels</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services