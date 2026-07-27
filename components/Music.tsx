import Image from "next/image";

const albums = [
  {
    title: "Split Decision - EP",
    artist: "Dave & Central Cee",
    year: "2023",
    artwork:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/af/50/f0/af50f07c-e1e4-6a88-6eac-3c2a1f1787e5/00602455951250_Cover.jpg/600x600bb.jpg",
    appleMusic: "https://music.apple.com/us/album/split-decision-ep/1839470018",
  },
  {
    title: "Oh yeah?",
    artist: "Steve Lacy",
    year: "2026",
    artwork:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1c/b2/46/1cb246db-afae-a599-d377-44a7ea7267fa/196874346976.jpg/600x600bb.jpg",
    appleMusic: "https://music.apple.com/us/album/oh-yeah/6773775032",
  },
  {
    title: "Mama's Gun",
    artist: "Erykah Badu",
    year: "2000",
    artwork:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/63/9c/05/639c0568-e961-2146-f4cb-819a1f9226d3/06UMGIM01547.rgb.jpg/600x600bb.jpg",
    appleMusic: "https://music.apple.com/us/album/mamas-gun/1440755899",
  },
  {
    title: "sankofa",
    artist: "redveil",
    year: "2025",
    artwork: "https://f4.bcbits.com/img/a1514312978_10.jpg",
    appleMusic: "https://music.apple.com/us/album/sankofa/1884734946",
  },
  {
    title: "IGOR",
    artist: "Tyler, The Creator",
    year: "2019",
    artwork:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0c/06/05/0c060581-6242-6a2a-a677-20170f2cf8da/886447710180.jpg/600x600bb.jpg",
    appleMusic: "https://music.apple.com/us/album/igor/1463409338",
  },
  {
    title: "Got to Be There (2013 Remaster)",
    artist: "Michael Jackson",
    year: "1972",
    artwork:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/6c/3c/86/6c3c860b-0e0a-f016-1adc-44d8e3ff0144/00602537386796.rgb.jpg/600x600bb.jpg",
    appleMusic: "https://music.apple.com/us/album/got-to-be-there-2013-remaster/1442259586",
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

        <div className="grid grid-cols-3 gap-8">
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
                  sizes="(max-width: 768px) 50vw, 33vw"
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
