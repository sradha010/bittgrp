import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { NoticeMarquee } from "@/components/site/NoticeMarquee";
import { Institutions } from "@/components/site/Institutions";
import { Stats } from "@/components/site/Stats";
import { WhyBitt } from "@/components/site/WhyBitt";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BITT — Birsa Institute of Technology Trust | Future Leaders Through Education" },
      { name: "description", content: "A unified educational ecosystem of six institutions — Polytechnic, BNYPC, Public School, Bitty Balpan, Devi Darshan and VGE Jobs — shaping future leaders." },
      { property: "og:title", content: "BITT — Birsa Institute of Technology Trust" },
      { property: "og:description", content: "A unified educational ecosystem of six institutions shaping future leaders through innovation." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <Hero />
      <NoticeMarquee />
      <Institutions />
      <Stats />
      <WhyBitt />
      <Contact />
      <Footer />
    </main>
  );
}
