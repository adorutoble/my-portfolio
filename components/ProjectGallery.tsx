"use client";

import { useState } from "react";

type ProjectGalleryProps = {
  images: string[];
  title: string;
};

export default function ProjectGallery({
  images,
  title,
}: ProjectGalleryProps) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) {
    return (
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Screenshots coming soon.
      </p>
    );
  }

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      {/* Main image */}
      <button
        type="button"
        onClick={nextImage}
        className="group block w-full overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
        aria-label="View next screenshot"
      >
        <img
          src={images[current]}
          alt={`${title} screenshot ${current + 1}`}
          className="aspect-video w-full object-contain bg-neutral-100 transition-opacity group-hover:opacity-90 dark:bg-neutral-900"
        />
      </button>

      {/* Navigation */}
      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={previousImage}
          className="font-mono text-xs underline underline-offset-4 transition-opacity hover:opacity-60"
        >
          ← Previous
        </button>

        <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
          {current + 1} / {images.length}
        </span>

        <button
          type="button"
          onClick={nextImage}
          className="font-mono text-xs underline underline-offset-4 transition-opacity hover:opacity-60"
        >
          Next →
        </button>
      </div>
    </div>
  );
}