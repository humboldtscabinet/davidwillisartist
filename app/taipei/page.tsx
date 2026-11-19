import type { Metadata } from "next";
import Image from "next/image";
import { artworkPages, catalogSrc, TAIPEI_SHOW } from "@/lib/taipei-catalog";

export const metadata: Metadata = {
  title: "Taipei Show | David Willis",
  description:
    "Coral sculptures from The Spirit of Asia in Coral, David Willis’s 1988 exhibition at the Taipei Fine Arts Museum.",
  openGraph: {
    title: "Taipei Show | David Willis",
    description:
      "The sculptures from David Willis’s 1988 exhibition at the Taipei Fine Arts Museum.",
    type: "website",
  },
};

export default function TaipeiShowPage() {
  return (
    <main id="main-content">
      <section className="bg-surface-light px-4 pb-8 pt-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {TAIPEI_SHOW.venue}
          </p>
          <h1 className="mb-4 text-4xl font-bold text-brand md:text-5xl">{TAIPEI_SHOW.title}</h1>
          <p className="mb-6 text-lg text-gray-600">{TAIPEI_SHOW.dates}</p>
          <p className="text-lg leading-relaxed text-gray-700">
            David Willis&rsquo;s 1988 exhibition at the Taipei Fine Arts Museum was the first public
            showing of coral statuary in the Republic of China. The sculptures from that exhibition
            are below.
          </p>
        </div>
      </section>
      <section className="bg-surface-light px-4 pb-20" aria-label="Exhibition sculptures">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {artworkPages.map((page, index) => {
            const isCover = page.page === 1;
            const alt = isCover
              ? `Catalog cover of ${TAIPEI_SHOW.title}, ${TAIPEI_SHOW.venue}, 1988`
              : `Coral sculpture ${index} of ${artworkPages.length - 1} from ${TAIPEI_SHOW.title}, ${TAIPEI_SHOW.venue}, 1988`;
            return (
              <figure key={page.page} className="bg-white">
                <Image
                  src={catalogSrc(page, "large")}
                  alt={alt}
                  width={1200}
                  height={1207}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-auto w-full"
                  priority={index < 2}
                />
              </figure>
            );
          })}
        </div>
      </section>
    </main>
  );
}
