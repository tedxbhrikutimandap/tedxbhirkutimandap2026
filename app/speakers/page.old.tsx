import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";

export default function SpeakersPage() {
  return (
    <>
      <PageHero title="Speakers" />
      <section className="pb-32 md:pb-48 flex items-center justify-center min-h-[40vh] relative overflow-hidden">
        {/* Ambient red glow */}
        <div className="absolute top-1/2 left-1/2 hidden h-[200px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ted-red/10 blur-[100px] pointer-events-none md:block" />

        <Container className="relative z-10 text-center">
          <p className="text-5xl sm:text-6xl md:text-8xl font-[900] uppercase tracking-tight text-ted-red leading-[0.9] font-heading drop-shadow-[0_0_40px_rgba(235,0,40,0.4)]">
            Coming Soon
          </p>
          <p className="mt-6 text-sm md:text-base text-white/40 uppercase tracking-[0.2em] font-medium">
            Stay tuned for the reveal
          </p>
        </Container>
      </section>
    </>
  );
}
