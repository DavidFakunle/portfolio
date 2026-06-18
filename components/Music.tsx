import Image from "next/image";

const albums = [
  {
    title: "ICEMAN",
    artist: "Drake",
    year: "2026",
    artwork:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/35/b9/06/35b90629-a873-14f8-4789-ffc324960038/26UMGIM63614.rgb.jpg/600x600bb.jpg",
    appleMusic: "https://music.apple.com/us/album/iceman/6769568449",
  },
  {
    title: "CAOS",
    artist: "Miguel",
    year: "2025",
    artwork:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/20/eb/be/20ebbe93-cdd5-72f0-5f80-4e5149dfe231/196871232944.jpg/600x600bb.jpg",
    appleMusic: "https://music.apple.com/us/album/caos/1836281105",
  },
  {
    title: "M$NEY",
    artist: "Asake",
    year: "2026",
    artwork:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/31/e4/eb/31e4ebf4-97bd-c193-59c7-1b72ed7ab53a/ticket.wlorjbae.jpg/600x600bb.jpg",
    appleMusic: "https://music.apple.com/us/album/m%24ney/1891869190",
  },
  {
    title: "BELOVED: ACT II",
    artist: "GIVĒON",
    year: "2026",
    artwork:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/06/11/cc/0611cc52-0b9f-6f3a-8387-f9132ba9825b/196874175637.jpg/600x600bb.jpg",
    appleMusic: "https://music.apple.com/us/album/beloved-act-ii/1891467233",
  },
  {
    title: "The Fall-Off",
    artist: "J. Cole",
    year: "2026",
    artwork:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/de/94/4b/de944b82-ef5a-2f5b-4af7-e30c05ae1eac/26UMGIM15402.rgb.jpg/600x600bb.jpg",
    appleMusic: "https://music.apple.com/us/album/the-fall-off/1875080726",
  },
  {
    title: "Son Of Spergy",
    artist: "Daniel Caesar",
    year: "2025",
    artwork:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/c0/c5/3bc0c51d-33f2-ee19-e148-6d8f2c50df24/25UMGIM90843.rgb.jpg/600x600bb.jpg",
    appleMusic: "https://music.apple.com/us/album/son-of-spergy/1839352404",
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
      <div className="w-full px-12 py-24">
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
