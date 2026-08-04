import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.label}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0F172A",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#F7F8FA",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 12,
              backgroundColor: "#2563EB",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            MH
          </div>
          <span style={{ fontSize: 24, fontWeight: 600 }}>{profile.name}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#38BDF8",
            }}
          >
            {profile.label}
          </span>
          <span
            style={{
              fontSize: 52,
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#F7F8FA",
              maxWidth: 980,
            }}
          >
            {profile.headline}
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
