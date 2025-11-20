"use client";

import { useEffect } from "react";

interface LightboxProps {
  image: {
    src: string;
    alt: string;
    title: string;
  };
  onClose: () => void;
}

export default function Lightbox({ image, onClose }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
        aria-label="Close lightbox"
      >
        &times;
      </button>
      <div className="max-w-5xl max-h-[90vh] flex flex-col items-center">
        <div className="relative w-full h-full bg-gray-800 flex items-center justify-center rounded-lg">
          <span className="text-white text-xl">{image.title}</span>
        </div>
        <p className="text-white mt-4 text-center text-lg">{image.title}</p>
      </div>
    </div>
  );
}
