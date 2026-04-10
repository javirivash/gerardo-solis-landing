import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Properties from "@/components/properties";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Properties />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
