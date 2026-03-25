import { ImageResponse } from "next/og";
import { businessInfo } from "@/lib/site";

export const runtime = "edge";

export const alt = "Betul Hali Yikama";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#f4f9fb",
          color: "#0f172a",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -60,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "rgba(21, 151, 165, 0.12)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -140,
            left: -80,
            width: 360,
            height: 360,
            borderRadius: 9999,
            background: "rgba(14, 116, 144, 0.08)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "64px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 28,
              color: "#0f7a87",
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: 9999,
                background: "#1597a5",
              }}
            />
            Bandirma Hali Yikama
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 820 }}>
            <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 700 }}>
              {businessInfo.businessName}
            </div>
            <div style={{ fontSize: 34, lineHeight: 1.35, color: "#334155" }}>
              Hijyenik temizlik, zamaninda teslim ve Bandirma genelinde profesyonel servis.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 18,
              fontSize: 24,
              color: "#334155",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "14px 20px",
                borderRadius: 9999,
                background: "rgba(255,255,255,0.9)",
              }}
            >
              Ucretsiz Servis
            </div>
            <div
              style={{
                display: "flex",
                padding: "14px 20px",
                borderRadius: 9999,
                background: "rgba(255,255,255,0.9)",
              }}
            >
              Hizli Teslim
            </div>
          </div>
        </div>
      </div>
    ),
  );
}
