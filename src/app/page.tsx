import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutCompany from "@/components/AboutCompany";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Certification from "@/components/Certification";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutCompany />
        <Services />
        <Team />
        <Certification />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
