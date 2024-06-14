import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Third from "@/components/Third";
import Galaxy from "@/components/Galaxy"

export default function home()
{
  return(
    <>
     <Navbar></Navbar>
      <Hero></Hero>
      <Galaxy></Galaxy>
      <Third></Third>
    </>
  )
}