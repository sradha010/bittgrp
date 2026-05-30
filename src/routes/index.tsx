import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Institutions } from "@/components/site/Institutions";
import { Stats } from "@/components/site/Stats";
import { Recruiters } from "@/components/site/Recruiters";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BITT — Build The Future You Imagine | Birsa Institute of Technology Trust" },
      { name: "description", content: "A unified educational ecosystem of six institutions — engineering, healthcare, school education, early learning, and career development. Where future leaders are built." },
      { property: "og:title", content: "BITT — Build The Future You Imagine" },
      { property: "og:description", content: "Six specialized institutions. One unified mission. Shaping engineers, healthcare professionals, and career-ready graduates since 1999." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen text-foreground antialiased" style={{ background: "#E7ECEF" }}>
      <Navbar />
      <Hero />
      <Institutions />
      <Stats />
      <Recruiters />
      <Contact />
      <Footer />
    </main>
  );
}
