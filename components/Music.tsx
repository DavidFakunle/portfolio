import Image from "next/image";

const albums = [
  {
    title: "BELOVED",
    artist: "Giveon",
    year: "2026",
    artwork:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/47/03/4c/47034c71-831b-61a2-8cc2-502f927834bd/196873057620.jpg/600x600bb.jpg",
    appleMusic: "https://music.apple.com/us/album/beloved/1815356726",
  },
  {
    title: "With No Due Respect",
    artist: "FoggieRaw",
    year: "2026",
    artwork:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/94/c1/af/94c1af0b-1cd5-1a3a-a762-67e381c31358/26UMGIM07433.rgb.jpg/600x600bb.jpg",
    appleMusic:
      "https://music.apple.com/us/album/with-no-due-respect/1871674817",
  },
  {
    title: "2014 Forest Hills Drive",
    artist: "J. Cole",
    year: "2014",
    artwork:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ee/28/67/ee286794-6c33-a8c2-5c37-c04f1cb5e8a6/21UM1IM54415.rgb.jpg/600x600bb.jpg",
    appleMusic:
      "https://music.apple.com/us/album/2014-forest-hills-drive/1600772499",
  },
  {
    title: "Bully",
    artist: "Ye",
    year: "2026",
    artwork:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/4c/78/0e/4c780ef8-f9cf-62f2-b956-2ceab8b81905/0692788731278_cover.jpg/600x600bb.jpg",
    appleMusic: "https://music.apple.com/us/album/bully-ep/1872771948",
  },
  {
    title: "It's Us Vol. 2",
    artist: "Concrete Boys",
    year: "2026",
    artwork:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/36/0e/28/360e284d-5d6d-1970-d500-5797488996f0/26BMR0007733.rgb.jpg/600x600bb.jpg",
    appleMusic: "https://music.apple.com/us/album/its-us-vol-2/1878016122",
  },
  {
    title: "We're All Alone in This Together",
    artist: "Dave",
    year: "2021",
    artwork:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e7/75/65/e7756565-3351-60a3-562a-8f168f64c2b4/00602438588909_Cover.jpg/600x600bb.jpg",
    appleMusic:
      "https://music.apple.com/gb/album/were-all-alone-in-this-together/1839573796",
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
            What I&apos;ve been listening to this month. Open in Apple Music.
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
              <div className="relative w-full aspect-square rounded-xl mb-3 overflow-hidden transition-transform duration-300 group-hover:scale-[1.03] group-hover:shadow-xl">
                <Image
                  src={album.artwork}
                  alt={`${album.title} by ${album.artist}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/20">
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
      </div>
    </section>
  );
}
