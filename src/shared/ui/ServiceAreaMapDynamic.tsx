"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import type { ServiceAreaMap } from "@/sections/home/ServiceAreas/Map";

type Props = ComponentProps<typeof ServiceAreaMap>;

export const ServiceAreaMapDynamic = dynamic<Props>(
  () => import("@/sections/home/ServiceAreas/Map").then((m) => m.ServiceAreaMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full rounded-[24px] bg-[#32313B] animate-pulse" />
    ),
  }
);
