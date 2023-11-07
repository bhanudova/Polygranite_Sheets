import Image from "next/image"
import Link from "next/link";

export default function Services() {
    return (<>
        <div className="bg-[#F3EEEA]">
            <div className="flex justify-center items-center  py-10 ">
                <div>
                    <div className="text-center">
                        <h3 className="text-sm md:text-base lg:text-xl font-bold text-[#d1bf87]">OUR SERVICES LIST</h3>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#255946]">What We’re Offering</h2>
                    </div>
                    <div className="flex justify-center items-center mt-3 md:mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                            <Link href="/fertilizers" className="card w-72 md:w-72 lg:w-60 shadow-xl box bg-white pt-6">
                                <figure><Image width={1000} height={1000} src="/service_img1.jpg" alt="Shoes" className="w-[10rem] h-[10rem] rounded-md" /></figure>
                                <div className="text-center p-4 md:p-4 lg:p-3">
                                    <div className="flex justify-center items-center">
                                        <div className="bg-blue-50 rounded-full mt-[-50px] w-20 p-3">
                                            <Image src="/service_logo1.png" width={1000} height={1000} alt="Cow" />
                                        </div>
                                    </div>
                                    <h2 className="font-bold text-sm md:text-base lg:text-base">Polygranite Sheets</h2>
                                    <p className="text-xs md:text-sm lg:text-sm">
                                        Polygranite is a durable and versatile material that is perfect for a variety of
                                        applications, including countertops, flooring, and walls,polygranite offers the
                                    </p>
                                </div>
                            </Link>
                            <Link href="/seeds" className="card  w-72 md:w-72 lg:w-60   shadow-xl box bg-white pt-6">
                                <figure><Image width={1000} height={1000} src="/service_img2.jpg" alt="seeds_card" className="w-[10rem] h-[10rem] rounded-md" /></figure>
                                <div className="text-center p-4 md:p-4 lg:p-3">
                                    <div className="flex justify-center items-center">
                                        <div className="bg-blue-50 rounded-full mt-[-50px] w-20 p-3">
                                            <Image src="/service_logo2.png" width={1000} height={1000} alt="seeds_logo" />
                                        </div>
                                    </div>
                                    <h2 className="font-bold text-sm md:text-base lg:text-base">WPC Panels</h2>
                                    <p className="text-xs md:text-sm lg:text-sm">
                                        One of the main benefits of WPC panels is their moisture resistance. Unlike
                                        traditional wood, WPC panels are not prone to rot, mold, or mildew, making them
                                    </p>
                                </div>
                            </Link>
                            <Link href="/food" className="card w-72 md:w-72 lg:w-60   shadow-xl box bg-white pt-6">
                                <figure><Image width={1000} height={1000} src="/service_img3.jpg" alt="food_card" className="w-[10rem] h-[10rem] rounded-md" /></figure>
                                <div className="text-center p-4 md:p-4 lg:p-3">
                                    <div className="flex justify-center items-center">
                                        <div className="bg-blue-50 rounded-full mt-[-50px] w-20 p-3">
                                            <Image src="/service_logo3.png" width={1000} height={1000} alt="food_logo" />
                                        </div>
                                    </div>
                                    <h2 className="font-bold text-sm md:text-base lg:text-base">PVC wall Panels</h2>
                                    <p className="text-xs md:text-sm lg:text-sm">
                                        PVC wall panels are an innovative and versatile building material that
                                        offers a wide range of benefits. Made from a durable and lightweight PVC
                                    </p>
                                </div>
                            </Link>
                            <Link href="/tissueculture" className="card w-72 md:w-72 lg:w-60   shadow-xl box bg-white pt-6">
                                <figure><Image width={1000} height={1000} src="/service_img4.jpg" alt="tissue_culture_card" className="w-[10rem] h-[10rem] rounded-md" /></figure>
                                <div className="text-center p-4 md:p-4 lg:p-3">
                                    <div className="flex justify-center items-center">
                                        <div className="bg-blue-50 rounded-full mt-[-50px] w-20 p-4">
                                            <Image src="/service_logo4.png" width={1000} height={1000} alt="tissue_culture_logo" />
                                        </div>
                                    </div>
                                    <h2 className="font-bold text-sm md:text-base lg:text-base">3D wall Panels</h2>
                                    <p className="text-xs md:text-sm lg:text-sm">
                                        3D wall panels are a modern and innovative solution for adding dimension
                                        and texture to any interior space. Made from a variety of materials,
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}