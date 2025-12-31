import Nav from "@/components/ui/Nav";
import Hero from "@/components/sections/Hero";
import OurStory from "@/components/sections/OurStory";
import Details from "@/components/sections/Details";
import RSVP from "@/components/sections/RSVP";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <div className="non-sticky-sections" data-color-scheme="1">
        <div className="non-sticky-sections-inner">
          <OurStory />
          <Details />
          <RSVP />
        </div>
        <Footer />
      </div>
    </main>
  );
}
