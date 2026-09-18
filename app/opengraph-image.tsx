import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Maretyui | Maik Reinhardt"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#141414",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700 }}>
          <span style={{ color: "#00d4ff" }}>Maretyui</span>
          <span style={{ color: "#f5f5f5", marginLeft: 20 }}>| Maik Reinhardt</span>
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#a3a3a3", marginTop: 24 }}>
          Web Design & Development · Swimming Instructor
        </div>
      </div>
    ),
    { ...size }
  )
}
