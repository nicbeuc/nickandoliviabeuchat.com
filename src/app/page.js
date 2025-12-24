import Hero from "@/components/sections/Hero";
import OurStory from "@/components/sections/OurStory";
import Details from "@/components/sections/Details";
import Nav from "@/components/ui/Nav";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <div className="non-sticky-sections" data-color-scheme="1">
        <OurStory />
        <Details />
      </div>
    </main>
  );
}
