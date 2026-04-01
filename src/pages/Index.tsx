import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuHighlights from "@/components/MenuHighlights";
import ReservationForm from "@/components/ReservationForm";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-[#1a1a1a] text-gray-200">
      <Navbar />
      <Hero />
      <MenuHighlights />
      <ReservationForm />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Index;