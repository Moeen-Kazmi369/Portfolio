'use client'
import Aos from 'aos'
import Counter from '@/components/Counter'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MessageBtn from '@/components/MessageBtn'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Showcase from '@/components/Showcase'
import SideBtn from '@/components/SideBtn'
import SliderShowcase from '@/components/SliderShowcase'
import Work from '@/components/Work'
import Image from 'next/image'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
export default function Home() {
  useEffect(()=>{
    Aos.init({
      duration: 1800,
      offset : 20,
});
  },[])
  return (
    <div className="App">
    <Navbar />
    <MessageBtn />
    <SideBtn />
    <Header />
    <Showcase />
    <Projects />
    <Counter />
    <SliderShowcase />
    <Work />
    <Footer />
  </div>
  )
}
