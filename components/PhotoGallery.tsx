"use client";

import { useState } from "react";
import Image from "next/image";

type Photo = {
  src: string;
  alt: string;
  caption: string;
};

const photos: Photo[] = [
  {
    src: "/gallery/gallery-2.jpg",
    alt: "Standing at the Mount Washington State Park sign with a friend",
    caption: "Summiting Mount Washington, NH",
  },
  {
    src: "/gallery/gallery-1.jpg",
    alt: "A waterfall cascading into a clear pool surrounded by moss-covered rocks",
    caption: "A waterfall stop along the Vermont bike trip",
  },
  {
    src: "/gallery/gallery-7.jpg",
    alt: "Standing in a mountaintop meadow with a German shepherd",
    caption: "Hiking with the dog on a summit trail",
  },
  {
    src: "/gallery/gallery-6.jpg",
    alt: "Working on a laptop at a whiteboard-covered desk",
    caption: "Heads down building a new project",
  },
  {
    src: "/gallery/gallery-5.jpg",
    alt: "Standing on the beach with family at sunset",
    caption: "A family trip to the beach",
  },
  {
    src: "/gallery/gallery-4.jpg",
    alt: "Receiving a certificate of honor on stage with family",
    caption: "Scout honors ceremony with family",
  },
  {
    src: "/gallery/gallery-8.jpg",
    alt: "Dressed up for a formal night out with friends",
    caption: "A night out with friends",
  },
  {
    src: "/gallery/gallery-3.jpg",
    alt: "Sitting in the car with the family dog",
    caption: "Car rides with the family dog",
  },
  {
    src: "/gallery/gallery-11.jpg",
    alt: "Exploring the rock formations at Joshua Tree National Park",
    caption: "Exploring Joshua Tree National Park",
  },
  {
    src: "/gallery/gallery-10.jpg",
    alt: "A view of forested mountains from a rocky overlook",
    caption: "A summit overlook on a hike",
  },
  {
    src: "/gallery/gallery-9.jpg",
    alt: "A snow-covered trail through the trees on a ski mountain",
    caption: "Fresh snow on the mountain",
  },
];

export default function PhotoGallery() {
  const [index, setIndex] = useState(0);
  const photo = photos[index];

  const go = (delta: number) => {
    setIndex((i) => (i + delta + photos.length) % photos.length);
  };

  return (
    <div className="rounded-lg border border-ink/10 bg-surface p-4 dark:border-dark-fg/10 dark:bg-dark-surface sm:p-6">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-ink/5 dark:bg-dark-fg/5">
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 768px) 60vw, 100vw"
          className="object-cover"
          priority={index === 0}
        />

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-ink shadow-sm backdrop-blur transition-colors hover:bg-white dark:bg-black/50 dark:text-dark-fg dark:hover:bg-black/70"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-ink shadow-sm backdrop-blur transition-colors hover:bg-white dark:bg-black/50 dark:text-dark-fg dark:hover:bg-black/70"
        >
          →
        </button>
      </div>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`View photo: ${p.caption}`}
            className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md ring-2 transition-all sm:h-20 sm:w-20 ${
              i === index
                ? "ring-accent"
                : "ring-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={p.src}
              alt=""
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
