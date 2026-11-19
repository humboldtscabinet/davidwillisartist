"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  catalogPages,
  catalogSrc,
  TAIPEI_SHOW,
  type CatalogPage,
} from "@/lib/taipei-catalog";

const pageLabel = (page: CatalogPage) =>
  `${TAIPEI_SHOW.title}, catalog page ${page.page} of ${catalogPages.length}`;

export default function TaipeiCatalog() {
  const [activePage, setActivePage] = useState(1);
  const [openPage, setOpenPage] = useState<number | null>(null);
  const pageRefs = useRef<Array<HTMLElement | null>>([]);
  const thumbRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const thumbStripRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const viewerWasOpen = useRef(false);

  useEffect(() => {
    const nodes = pageRefs.current.filter((node): node is HTMLElement => node !== null);
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const page = Number(visible.target.getAttribute("data-page"));
        if (page) setActivePage(page);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.4, 0.7] }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const thumb = thumbRefs.current[activePage - 1];
    const strip = thumbStripRef.current;
    if (!thumb || !strip) return;
    const target = thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2;
    strip.scrollTo({ left: target, behavior: "smooth" });
  }, [activePage]);

  const scrollToPage = (page: number) => {
    pageRefs.current[page - 1]?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActivePage(page);
  };

  const openViewer = (page: number, opener: HTMLButtonElement | null) => {
    openerRef.current = opener;
    setOpenPage(page);
  };

  const closeViewer = useCallback(() => {
    setOpenPage(null);
    openerRef.current?.focus();
  }, []);

  const stepViewer = useCallback((delta: number) => {
    setOpenPage((current) => {
      if (current === null) return current;
      const next = current + delta;
      if (next < 1 || next > catalogPages.length) return current;
      return next;
    });
  }, []);

  useEffect(() => {
    if (openPage === null) {
      viewerWasOpen.current = false;
      return;
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowRight") stepViewer(1);
      if (event.key === "ArrowLeft") stepViewer(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    if (!viewerWasOpen.current) {
      closeButtonRef.current?.focus();
    }
    viewerWasOpen.current = true;
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openPage, closeViewer, stepViewer]);

  const viewing = openPage === null ? null : catalogPages[openPage - 1];

  return (
    <div>
      <div className="sticky top-16 z-30 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <label htmlFor="catalog-jump" className="text-sm font-medium text-gray-700">
              Jump to page
            </label>
            <select
              id="catalog-jump"
              value={activePage}
              onChange={(event) => scrollToPage(Number(event.target.value))}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900"
            >
              {catalogPages.map((page) => (
                <option key={page.page} value={page.page}>
                  Page {page.page}
                </option>
              ))}
            </select>
            <span className="text-sm text-gray-500">of {catalogPages.length}</span>
          </div>
          <a
            href={TAIPEI_SHOW.flipbookPath}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-brand hover:underline"
          >
            Open the flipbook
          </a>
        </div>
        <div ref={thumbStripRef} className="mx-auto max-w-6xl overflow-x-auto px-4 pb-3">
          <div className="flex w-max gap-2" role="list" aria-label="Catalog page thumbnails">
            {catalogPages.map((page) => {
              const selected = page.page === activePage;
              return (
                <button
                  key={page.page}
                  ref={(node) => {
                    thumbRefs.current[page.page - 1] = node;
                  }}
                  type="button"
                  role="listitem"
                  aria-current={selected ? "true" : undefined}
                  aria-label={`Go to page ${page.page}`}
                  onClick={() => scrollToPage(page.page)}
                  className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-gray-100 ${
                    selected ? "ring-2 ring-brand ring-offset-2" : "opacity-80 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={catalogSrc(page, "thumb")}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-10 px-4 py-10">
        {catalogPages.map((page) => (
          <article
            key={page.page}
            id={`catalog-page-${page.page}`}
            data-page={page.page}
            ref={(node) => {
              pageRefs.current[page.page - 1] = node;
            }}
            className="scroll-mt-56"
          >
            <div className="mb-3 flex items-baseline justify-between gap-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
                Page {page.page}
              </h2>
              <button
                type="button"
                onClick={(event) => openViewer(page.page, event.currentTarget)}
                className="text-sm font-medium text-brand hover:underline"
              >
                View larger
              </button>
            </div>
            <button
              type="button"
              onClick={(event) => openViewer(page.page, event.currentTarget)}
              className="block w-full overflow-hidden rounded-2xl bg-gray-100 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              aria-label={`View ${pageLabel(page)} larger`}
            >
              <Image
                src={catalogSrc(page, "large")}
                alt=""
                width={1200}
                height={1207}
                sizes="(max-width: 768px) 100vw, 768px"
                className="h-auto w-full"
                priority={page.page <= 2}
              />
            </button>
          </article>
        ))}
      </div>

      {viewing && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={pageLabel(viewing)}
          onClick={closeViewer}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeViewer}
            className="absolute right-4 top-4 z-10 text-4xl leading-none text-white hover:text-gray-300"
            aria-label="Close page viewer"
          >
            &times;
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              stepViewer(-1);
            }}
            disabled={viewing.page === 1}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 px-3 py-4 text-2xl text-white hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30 sm:left-4"
            aria-label="Previous page"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              stepViewer(1);
            }}
            disabled={viewing.page === catalogPages.length}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 px-3 py-4 text-2xl text-white hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30 sm:right-4"
            aria-label="Next page"
          >
            ›
          </button>
          <div
            className="flex max-h-[90vh] w-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[78vh] w-full">
              <Image
                src={catalogSrc(viewing, "large")}
                alt={pageLabel(viewing)}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-center text-white">
              Page {viewing.page} of {catalogPages.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
