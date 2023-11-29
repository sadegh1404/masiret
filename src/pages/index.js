import Customer from "@/components/Customers"
import Features from "@/components/Features"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"

export default function Home(props) {
  return (
    <>
      <Header token={props.token}/>
      <Hero/>
      <Features/>
      <Customer/>
      <Footer/>
    </>
  )
}
