const albums = [
  {
    title: "Ctrl",
    artist: "SZA",
    year: "2017",
    appleMusic: "https://music.apple.com/us/album/ctrl/1216648904",
    color: "#C8A882",
  },
  {
    title: "DAMN.",
    artist: "Kendrick Lamar",
    year: "2017",
    appleMusic: "https://music.apple.com/us/album/damn/1223592280",
    color: "#C05C3A",
  },
  {
    title: "After Hours",
    artist: "The Weeknd",
    year: "2020",
    appleMusic: "https://music.apple.com/us/album/after-hours/1500720641",
    color: "#8B2020",
  },
  {
    title: "Blonde",
    artist: "Frank Ocean",
    year: "2016",
    appleMusic: "https://music.apple.com/us/album/blonde/1146195596",
    color: "#D4A96A",
  },
  {
    title: "Igor",
    artist: "Tyler, the Creator",
    year: "2019",
    appleMusic: "https://music.apple.com/us/album/igor/1463892369",
    color: "#6A8B5E",
  },
  {
    title: "good kid, m.A.A.d city",
    artist: "Kendrick Lamar",
    year: "2012",
    appleMusic: "https://music.apple.com/us/album/good-kid-m-a-a-d-city/564097170",
    color: "#3A5E8B",
  },
];

function VinylIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="inline-block">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <path d="M12 2 A10 10 0 0 1 22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <path d="M2 12 A10 10 0 0 1 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.15" />
    </svg>
  );
}

export default function Music() {
  return (
    <section id="music" className="min-h-screen flex flex-col justify-center">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="mb-12">
          <p className="font-sans text-sm text-latte tracking-widest uppercase mb-2 flex items-center gap-2">
            <VinylIcon />
            On rotation
          </p>
          <h2 className="font-serif text-4xl font-bold text-espresso">Music</h2>
          <p className="font-sans text-sm text-espresso/50 mt-2">
            Albums I keep coming back to. Open in Apple Music.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {albums.map((album) => (
            <a
              key={album.title}
              href={album.appleMusic}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              {/* Album art placeholder — vinyl-style circle with color */}
              <div
                className="relative w-full aspect-square rounded-xl mb-3 overflow-hidden transition-transform duration-300 group-hover:scale-[1.03] group-hover:shadow-xl"
                style={{ backgroundColor: album.color }}
              >
                {/* Vinyl groove rings */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                    {[12, 22, 32, 40, 46].map((r) => (
                      <circle key={r} cx="50" cy="50" r={r} stroke="white" strokeWidth="0.6" />
                    ))}
                    <circle cx="50" cy="50" r="6" fill="white" opacity="0.6" />
                    <circle cx="50" cy="50" r="2" fill="white" />
                  </svg>
                </div>

                {/* Apple Music icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M23 2v20l-2-2V4L6 7v14l-2 1V5l19-3z"/>
                      <circle cx="4" cy="21" r="3" fill="white"/>
                      <circle cx="21" cy="19" r="3" fill="white"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-serif text-sm font-semibold text-espresso leading-tight line-clamp-1">
                  {album.title}
                </p>
                <p className="font-sans text-xs text-espresso/50 mt-0.5">
                  {album.artist} &middot; {album.year}
                </p>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-10 font-sans text-xs text-espresso/30 text-center">
          Edit the <code className="text-latte/70">albums</code> array in{" "}
          <code className="text-latte/70">components/Music.tsx</code> to add your favorites.
        </p>
      </div>
    </section>
  );
}
