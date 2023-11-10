import React from "react";

interface HeroProps {
    heading: string;
    message: string;
}

const Hero: React.FC<HeroProps> = ({ heading, message }) => {
    return (<>
        <div className="flex justify-center items-center h-[46rem] bg-fixed bg-center bg-cover custom-img">
            {/* Overlay */}
            <div className="absolute top-0 left-0 right-0 bottom-0  h-[46rem] bg-black/80 z-[2] " />
            <div className="p-5 text-white z-[2]">
                <h2 className="text-3xl md:text-5xl font-bold">{heading}</h2>
                <p className="py-4 text-xl w-full md:w-[35rem] lg:w-[50rem]">At Polygranite Sheets, we pride ourselves on being a leading provider of premium quality polygranite sheets designed to revolutionize architectural and construction projects. With an unwavering commitment to excellence, we offer a diverse range of polygranite sheets that meet the highest standards of durability, aesthetics, and functionality.</p>
                <button className="px-8 py-2 mt-2 border">Book</button>
            </div>
        </div>
    </>)
}

export default Hero;

