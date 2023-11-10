import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import { SlideData } from "../../type/data";
import { Instragram } from "@/components/Instragram";
import Contact from "@/components/Contact";

export default function Home() {
  return (<>
  <Hero heading='POLYGRANITE SHEETS' message=""/>  
  <Slider slides={SlideData}/>
  <Instragram/>
  <Contact/>
  </>)
}
