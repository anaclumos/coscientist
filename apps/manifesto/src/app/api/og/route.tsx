import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";
import { getFacultyGlyphic } from "@/lib/og/fonts";

const OG_WIDTH = 2400;
const OG_HEIGHT = 1260;

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") || "Coscientist";
  const description = searchParams.get("description") || "";

  const facultyGlyphicFont = await getFacultyGlyphic();

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0a0a0a",
        color: "white",
        fontFamily: "Faculty Glyphic",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-300px",
          right: "-100px",
          width: "1200px",
          height: "1200px",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-300px",
          left: "-100px",
          width: "1200px",
          height: "1200px",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "40px",
          right: "40px",
          bottom: "40px",
          border: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ display: "flex", gap: "6px" }}>
              <div
                style={{ width: "8px", height: "32px", background: "#fff" }}
              />
              <div
                style={{
                  width: "8px",
                  height: "32px",
                  background: "rgba(255,255,255,0.5)",
                }}
              />
              <div
                style={{
                  width: "8px",
                  height: "32px",
                  background: "rgba(255,255,255,0.2)",
                }}
              />
            </div>
            <span
              style={{
                fontSize: "32px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              Coscientist
            </span>
          </div>
          <span
            style={{
              fontSize: "32px",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            coscientist.app
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            maxWidth: "90%",
          }}
        >
          <h1
            style={{
              fontSize: "160px",
              lineHeight: "0.9",
              margin: 0,
              fontWeight: 400,
              background:
                "linear-gradient(to bottom right, #ffffff 50%, #9ca3af 100%)",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h1>
          {description && (
            <p
              style={{
                fontSize: "64px",
                lineHeight: "1.3",
                color: "#a1a1aa",
                margin: 0,
                maxWidth: "1800px",
              }}
            >
              {description.length > 140
                ? `${description.slice(0, 140)}...`
                : description}
            </p>
          )}
        </div>

        <div
          style={{
            width: "100%",
            height: "1px",
            background:
              "linear-gradient(to right, rgba(255,255,255,0.3) 0%, transparent 100%)",
          }}
        />
      </div>
    </div>,
    {
      width: OG_WIDTH,
      height: OG_HEIGHT,
      fonts: [
        {
          name: "Faculty Glyphic",
          data: facultyGlyphicFont,
          weight: 400,
          style: "normal",
        },
      ],
    },
  );
}
