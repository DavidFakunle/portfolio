import Image from "next/image";

const piece = {
  title: "The Gulf Stream",
  artist: "Winslow Homer",
  year: "1899",
  medium: "Oil on canvas",
  note: "Sharks circling, a waterspout on the horizon, a ship too far to help. Yet the man lies still, composed. It's a reminder that no matter what's closing in around you, your peace is yours to keep. ALWAYS MAINTAIN COMPOSURE",
};

export default function Art() {
  return (
    <section id="art" className="min-h-screen flex flex-col justify-center">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="mb-12">
          <p className="font-sans text-sm text-latte tracking-widest uppercase mb-2">
            Currently resonating
          </p>
          <h2 className="font-serif text-4xl font-bold text-espresso">Art</h2>
          <p className="font-sans text-sm text-espresso/50 mt-2">
            A piece I keep coming back to.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <Image
            src="https://images.metmuseum.org/CRDImages/ad/original/DP-20821-001.jpg"
            alt="The Gulf Stream by Winslow Homer"
            width={1600}
            height={988}
            style={{ width: "100%", height: "auto" }}
            className="rounded-xl"
            priority
          />

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-espresso leading-snug">
                {piece.title}
              </h3>
              <p className="font-sans text-sm text-espresso/60 mt-1">
                {piece.artist} &middot; {piece.year}
              </p>
              <p className="font-sans text-xs text-espresso/40 mt-0.5">
                {piece.medium} &middot; The Metropolitan Museum of Art
              </p>
            </div>

            <p className="font-serif text-base text-espresso/70 leading-relaxed italic sm:max-w-sm">
              &ldquo;{piece.note}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
