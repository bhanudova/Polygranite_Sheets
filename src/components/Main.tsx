import Image from "next/image";
export default function Main() {
    return (<>
        <div className="bg-[#F6FAFB] flex justify-center items-center">
            <div>
                <div className="carousel w-full h-[210px] md:w-full md:h-[450px] lg:w-full lg:h-[550px]">
                    <div id="slide1" className="carousel-item relative w-full ">
                        <Image width={1000} height={1000} alt="seeds_banner2" src="/banner3.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <Image width={1000} height={1000} alt="seeds_banner2" src="/banner2.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <Image width={1000} height={1000} alt="seeds_banner2" src="/banner1.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}