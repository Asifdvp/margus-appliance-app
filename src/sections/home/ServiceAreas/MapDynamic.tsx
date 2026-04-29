"use client";

import dynamic from "next/dynamic";

export const DynamicServiceAreaMap = dynamic(
  () => import("./Map").then((m) => m.ServiceAreaMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full rounded-[24px] bg-[#32313B] animate-pulse" />
    ),
  }
);
