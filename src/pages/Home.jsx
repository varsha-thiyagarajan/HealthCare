import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Service from "../components/Service";

function Home() {
  return (
    <div className=" bg-[#F5F9FC]">
    <Navbar/>
    <Section/>
    <Service/>
    <Footer/>
    </div>
  );
}

export default Home;
