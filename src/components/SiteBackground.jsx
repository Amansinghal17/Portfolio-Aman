import React from "react";
import { Particles } from "./Particles";

// Sits fixed behind the ENTIRE site (not just the hero) so every section
// shares the same living, drifting space backdrop instead of a flat color.
const SiteBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* base */}
      <div className="absolute inset-0 bg-primary" />

      {/* drifting nebula blobs */}
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />

      {/* starfield, mouse-reactive, spans full page height */}
      <Particles
        className="absolute inset-0"
        quantity={160}
        staticity={40}
        ease={60}
        size={0.5}
        color="#ffffff"
      />

      {/* subtle vignette so content stays readable at the edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-primary)_78%)]" />
    </div>
  );
};

export default SiteBackground;
