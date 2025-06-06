import Image from "next/image"

export function Logo() {
  return (
    <div className="relative w-20 h-20 md:w-24 md:h-24 transition-all duration-300 hover:scale-105">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20sdfm-gDlxg0zxe6wVV9o5cISteykVa4LQhz.png"
        alt="SDFM 2520"
        fill
        className="object-contain drop-shadow-lg"
        priority
        unoptimized
      />
    </div>
  )
}