import Hero from './Hero';
import HighlightKegiatan from './HighlightKegiatan';
import Statistik from './Statistik';
import PenjelasanLogo from './PenjelasanLogo';

export default function Beranda() {
  return (
    <section id="beranda">
      <Hero />

      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-green-300/50 to-transparent" />

        <HighlightKegiatan />

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-green-300/50 to-transparent" />

        <Statistik />

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-green-300/50 to-transparent" />

        <PenjelasanLogo />
      </div>
    </section>
  );
}
