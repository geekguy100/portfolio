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
          preload
          style={{ animationComposition: "add" }}
          alt="A black hat with wings"
          className="-my-6 sm:my-0 sm:animate-header-enter"
        />
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
