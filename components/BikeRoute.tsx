"use client";

import dynamic from "next/dynamic";
import { stats } from "@/components/bikeRouteData";

const BikeMap = dynamic(() => import("@/components/BikeMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <span className="text-sm text-ink-subtle dark:text-dark-subtle">
        Loading map…
      </span>
    </div>
  ),
});

export default function BikeRoute() {
  return (
    <div className="overflow-hidden rounded-lg bg-surface dark:bg-dark-surface">
      <div className="aspect-[2/1] w-full">
        <BikeMap />
      </div>
      <p className="border-t border-ink/10 px-4 py-2 text-center text-xs text-ink-subtle dark:border-dark-fg/10 dark:text-dark-subtle">
        Fairfield, CT → Rutland, VT · ~{stats.miles} mi
      </p>
    </div>
  );
}
