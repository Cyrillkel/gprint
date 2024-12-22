import HeroSection from "@/shared/components/hero";

export default function Home() {
  return (
    <div>
      <main className="">
        <HeroSection>
          <div className="flex gap-4 container flex-col lg:flex-row">
            <div className="flex flex-col items-start lg:w-1/2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Grow Your Business 10x with Metric
              </h1>
              <p>
                The Metric Dashboard brings all of your business insights under
                one roof. Revenue metrics, social, integrations - everything.
              </p>
              <div className="flex gap-5">
                <button>fdfdsf</button>
                <button>fdfdsfds</button>
              </div>
            </div>
            <div className="lg:w-1/2">fdfdsfdsfds</div>
          </div>
        </HeroSection>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
