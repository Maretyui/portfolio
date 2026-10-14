import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 512, height: 512 }
export const contentType = "image/png"

// layout.tsx's metadata only lists favicon.ico - browsers that want a real
// raster icon (Chrome's "install app" prompt, Android home screen) need a
// PNG at 192x192 or larger, which an .ico alone doesn't satisfy. Mirrors
// apple-icon.tsx's generated-mark pattern at a bigger size.
export default function Icon() {
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
          fontSize: 200,
          fontWeight: 700,
        }}
      >
        MR
      </div>
    ),
    { ...size }
  )
}
