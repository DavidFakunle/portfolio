import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Music from "@/components/Music";
import Art from "@/components/Art";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <div className="border-t border-parchment-dark" />
      <Projects />
      <div className="border-t border-parchment-dark" />
      <Experience />
      <div className="border-t border-parchment-dark" />
      <Music />
      <div className="border-t border-parchment-dark" />
      <Art />
      <footer className="border-t border-parchment-dark">
        <div className="max-w-3xl mx-auto px-6 py-8 text-center">
          <p className="font-sans text-xs text-espresso/30">
            &copy; {new Date().getFullYear()} David Fakunle
          </p>
        </div>
      </footer>
    </main>
  );
}
