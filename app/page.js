import Image from "next/image";
import Navbar from "@/components/Navbar";
import Me from "@/components/Me";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
   <Navbar/>
    <Me/>
    <About/>
    <Projects/>
    <Contact/>

    </>
  );
}
