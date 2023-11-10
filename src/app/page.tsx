import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { SlideData } from "../../type/data";
import { Instragram } from "@/components/Instragram";
import Contact from "@/components/Contact";

export default function Home() {
  return (<>
  <Hero heading='POLYGRANITE SHEETS' message=""/>  
  <Services/>
  <Instragram/>
  <Contact/>
  </>)
}
