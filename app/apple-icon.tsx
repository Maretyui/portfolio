import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 180, height: 180 }
export const contentType = "image/png"

// iOS "Add to Home Screen" looks for this file-convention route (or a static
// apple-touch-icon) rather than favicon.ico, which layout.tsx's metadata
// otherwise only points at - without it, pinning the site fell back to a
// screenshot thumbnail instead of a mark.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#141414",
          color: "#00d4ff",
          fontFamily: "sans-serif",
          fontSize: 72,
          fontWeight: 700,
        }}
      >
        MR
      </div>
    ),
    { ...size }
  )
}
