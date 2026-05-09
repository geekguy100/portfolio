import { SocialGrid } from "./social-grid"
import { NavigationBar } from "./nav-bar"
import Image from "next/image"
import HatLogo from "@/public/hat.png"

export function SiteHeader() {
  // Defaulting header height to what it is when the Image is fully loaded.
  return (
    <header className="site-section min-h-43.75 text-center sm:grid sm:grid-cols-3">
      {/* Logo */}
      <div className="flex flex-col items-center justify-center sm:items-end">
        <Image
          unoptimized
          width={175}
          src={HatLogo}
          style={{ animationComposition: "add" }}
          alt="A black hat with wings"
          className="-my-6 sm:my-0 sm:animate-header-enter"
        />
        <ConstructionBanner />
      </div>
      {/* Name */}
      <div className="flex flex-col items-center justify-center gap-2">
        <div>
          <h1>Kyle Grenier</h1>
          <h4>Immersive Technology and Game Developer</h4>
        </div>
        <NavigationBar />
      </div>
      {/* Socials */}
      <SocialGrid />
    </header>
  )
}

function ConstructionBanner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 24"
      stroke="black"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="absolute left-2 size-60 -rotate-45 max-sm:-top-2"
    >
      <defs>
        <pattern id="star" viewBox="0,0,5,5" width="20%" height="100%">
          <line x1={0} y1={-3} x2={10} y2={20} />
        </pattern>
      </defs>
      <rect x="2" y="6" width="24" height="8" rx="1" fill="yellow" />
      <rect x="2" y="6" width="24" height="8" rx="1" stroke="none" fill="url(#star)" />
      <text x={5} y={13} strokeWidth="0.25" stroke="black" fill="white" style={{ font: "8px sans-serif" }}>
        W.I.P
      </text>
    </svg>
  )
}
