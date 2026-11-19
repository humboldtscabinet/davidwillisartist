import type { Metadata } from "next";
import TaipeiCatalog from "@/components/TaipeiCatalog";
import { TAIPEI_SHOW, catalogPages } from "@/lib/taipei-catalog";

export const metadata: Metadata = {
  title: "Taipei Show | David Willis",
  description:
    "The Spirit of Asia in Coral, David Willis’s 1988 exhibition catalog from the Taipei Fine Arts Museum, page by page.",
  openGraph: {
    title: "Taipei Show | David Willis",
    description:
      "The Spirit of Asia in Coral, the catalog of David Willis’s 1988 exhibition at the Taipei Fine Arts Museum.",
    type: "website",
  },
};

export default function TaipeiShowPage() {
  return (
    <main id="main-content">
      <section className="bg-surface-light px-4 pb-10 pt-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {TAIPEI_SHOW.venue}
          </p>
          <h1 className="mb-4 text-4xl font-bold text-brand md:text-5xl">{TAIPEI_SHOW.title}</h1>
          <p className="mb-6 text-lg text-gray-600">{TAIPEI_SHOW.dates}</p>
          <p className="text-lg leading-relaxed text-gray-700">
            David Willis&rsquo;s 1988 exhibition at the Taipei Fine Arts Museum was the first public
            showing of coral statuary in the Republic of China. All {catalogPages.length} pages of
            the exhibition catalog are below, in order. Scroll to read them, or select a page to
            view it larger.
          </p>
        </div>
      </section>
      <TaipeiCatalog />
    </main>
  );
}
