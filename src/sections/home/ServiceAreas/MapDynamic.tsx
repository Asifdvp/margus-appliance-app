"use client";

import dynamic from "next/dynamic";

export const DynamicServiceAreaMap = dynamic(
  () => import("./Map").then((m) => m.ServiceAreaMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full rounded-2xl bg-gray-100 animate-pulse" />
    ),
  }
);
