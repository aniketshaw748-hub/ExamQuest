import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

// subtle drifting starfield + faint amber glow. GPU-light, cleans up, honors reduced motion.
export default function Starfield() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const cvs = ref.current;
    const ctx = cvs.getContext("2d");
    let raf, w, h, stars, dpr = Math.min(2, window.devicePixelRatio || 1);
    function resize() {
      w = cvs.width = innerWidth * dpr;
      h = cvs.height = innerHeight * dpr;
      cvs.style.width = innerWidth + "px";
      cvs.style.height = innerHeight + "px";
      const count = Math.round((innerWidth * innerHeight) / 11000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        r: (Math.random() * 1.3 + 0.3) * dpr,
        a: Math.random() * 0.5 + 0.15,
        tw: Math.random() * 0.02 + 0.004,
        ph: Math.random() * Math.PI * 2,
        vy: (Math.random() * 0.12 + 0.02) * dpr,
      }));
    }
    function frame(t) {
      ctx.clearRect(0, 0, w, h);
      // light mode: faint dark specks instead of bright stars, so they read on a pale canvas
      const light = document.documentElement.getAttribute("data-theme") === "light";
      const rgb = light ? "30,45,80" : "220,232,255";
      const aMul = light ? 0.4 : 1;
      for (const s of stars) {
        const tw = reduce ? s.a : s.a + Math.sin(t * s.tw + s.ph) * 0.18;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 7);
        ctx.fillStyle = `rgba(${rgb},${Math.max(0, tw) * aMul})`;
        ctx.fill();
        if (!reduce) { s.y += s.vy; if (s.y > h) { s.y = 0; s.x = Math.random() * w; } }
      }
      raf = requestAnimationFrame(frame);
    }
    resize();
    addEventListener("resize", resize);
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); };
  }, [reduce]);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-canvas" />
      <div
        className="absolute inset-0 opacity-70"
        style={{ background: "radial-gradient(1100px 620px at 50% -8%, rgba(246,181,61,0.10), transparent 60%), radial-gradient(900px 700px at 88% 8%, rgba(52,211,154,0.06), transparent 55%)" }}
      />
      <canvas ref={ref} className="absolute inset-0" />
    </div>
  );
}
