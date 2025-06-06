import { AutoSliderBanner } from "@/components/auto-slider-banner"
import { HoodieCard } from "@/components/hoodie-card"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <AutoSliderBanner />
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <HoodieCard
            title="Classic Black Hoodie"
            price={49.99}
            image="/images/hoodie-1.jpg"
            description="Premium quality black hoodie with modern fit"
          />
          <HoodieCard
            title="Urban Gray Hoodie"
            price={54.99}
            image="/images/hoodie-2.jpg"
            description="Comfortable gray hoodie for everyday wear"
          />
          <HoodieCard
            title="Street Style Hoodie"
            price={59.99}
            image="/images/hoodie-3.jpg"
            description="Trendy street style hoodie with unique design"
          />
        </div>
      </section>
    </div>
  )
}