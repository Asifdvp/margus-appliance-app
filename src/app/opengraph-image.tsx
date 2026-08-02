import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { CONTACT_INFO } from "@/constants";

export const runtime = "nodejs";
export const alt = "Margus Appliance — Expert Appliance Repair in Cleveland & Parma";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoBuffer = readFileSync(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px 80px",
          background: "linear-gradient(135deg, #2A0066 0%, #5500CC 55%, #7A2EE6 100%)",
        }}
      >
        <img src={logoSrc} width={200} height={114} style={{ objectFit: "contain" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 62,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.12,
              maxWidth: 980,
            }}
          >
            Appliance Repair in Cleveland &amp; Parma
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#E8D9FF", fontWeight: 500 }}>
            Same-Day Service · No Hidden Fees · 180-Day Warranty
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                fontSize: 26,
                fontWeight: 700,
                color: "#2A0066",
                background: "#FFD84D",
                padding: "10px 20px",
                borderRadius: 100,
              }}
            >
              4.9/5 Rating
            </div>
            <div style={{ display: "flex", fontSize: 26, color: "#FFFFFF", fontWeight: 600 }}>
              180+ Google Reviews
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 36, color: "#FFFFFF", fontWeight: 800 }}>
            {CONTACT_INFO.phone}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
