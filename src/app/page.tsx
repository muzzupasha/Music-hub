import Hero from "@/components/Hero";
import Image from "next/image";
import Feuture from "@/components/Feuture";
import Sticky from "@/components/Sticky";
import Flip from "@/components/Flip";
import { VortexDemo } from "@/components/VortexDemo";
import Instructors from "@/components/Instructors";
import Sp from "@/components/Sp";
import InfiniteMovingDemo from "@/components/InfiniteMovingDemo";
import Footer from "@/components/Footer";
export default function Home() {
  return (
   <main className="min-h-full bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <Hero />
    
    <Instructors />
    <Flip />
    <Sp/>
    <VortexDemo />
    <Sticky />
    <Feuture/>
    <InfiniteMovingDemo/>
    <Footer/>
   </main>
   
  );
}
