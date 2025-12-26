import Nav from "@/components/ui/Nav";
import Hero from "@/components/sections/Hero";
import OurStory from "@/components/sections/OurStory";
import Details from "@/components/sections/Details";
import RSVP from "@/components/sections/RSVP";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <div className="non-sticky-sections" data-color-scheme="1">
        <OurStory />
        <Details />
        <RSVP />
      </div>
    </main>
  );
}
