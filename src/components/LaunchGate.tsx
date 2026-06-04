"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Scissors, Sparkles } from "lucide-react";

export default function LaunchGate() {
  const [launched, setLaunched] = useState<boolean | null>(null);
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const CELEBRATION_DURATION = 5000; // ms; set between 5000-10000 as desired

  // Fetch persisted state
  useEffect(() => {
    const fetchState = async () => {
      try {
        const res = await fetch("/api/site-state");
        if (res.ok) {
          const data = await res.json();
          setLaunched(!!data.launched);
        } else {
          setLaunched(true);
        }
      } catch (e) {
        setLaunched(true);
      }
    };
    fetchState();
  }, []);

  // Prevent body scroll while the gate is active
  useEffect(() => {
    if (launched === null) return;
    const original = document.body.style.overflow;
    if (!launched) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = original || "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = original || "";
      document.body.style.touchAction = "";
    };
  }, [launched]);

  // Confetti / fireworks canvas animation
  useEffect(() => {
    if (!isCelebrating) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let raf = 0;
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const colors = ["#D4AF37", "#F7E7B6", "#ffffff", "#F2C6D3"];

    const particles: Array<any> = [];

    function rand(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: width / 2 + rand(-80, 80),
        y: height / 2 + rand(-20, 20),
        vx: rand(-6, 6),
        vy: rand(-12, -4),
        size: rand(6, 14),
        color: colors[Math.floor(Math.random() * colors.length)],
        rot: rand(0, Math.PI * 2),
        drift: rand(-0.02, 0.02),
      });
    }

    let t0 = performance.now();

    function draw(now: number) {
      const dt = now - t0;
      t0 = now;
      ctx.clearRect(0, 0, width, height);

      // subtle background burst
      ctx.beginPath();
      const g = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.max(width, height) / 1.2);
      g.addColorStop(0, "rgba(212,175,55,0.15)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.vy += 0.15; // gravity
        p.vx += p.drift;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += 0.1;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      });

      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);

    // Keep animation running while celebrating; respawn particles when they fall
    return () => {
      cancelAnimationFrame(raf);
      ctx.clearRect(0, 0, width, height);
    };
  }, [isCelebrating]);

  const handleLaunch = async () => {
    // trigger celebration animation
    setIsCelebrating(true);
    // show celebration text for CELEBRATION_DURATION, then transition out
    setTimeout(async () => {
      setIsAnimatingOut(true);
      try {
        await fetch("/api/site-state", { method: "POST" });
      } catch (e) {
        // ignore
      }
      // short delay to allow fade-out
      setTimeout(() => setLaunched(true), 600);
    }, CELEBRATION_DURATION);
  };

  if (launched === null) return null;
  if (launched) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] pointer-events-auto flex items-center justify-center bg-ink text-paper"
    >
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-gold/30 via-gold-soft/20 to-transparent rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-tr from-charcoal/70 via-ink/40 to-transparent rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-3xl w-full px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05 }}
          className="text-center"
        >
          <div className="mx-auto w-28 h-28 rounded-full bg-white/5 flex items-center justify-center mb-6 shadow-glow">
            <Scissors className="w-12 h-12 text-gold" />
          </div>

          <h1 className="text-5xl md:text-6xl font-serif text-paper leading-tight mb-4">Be Enrich Salon</h1>
          <p className="text-lg text-stone-300 mb-8">A premium salon experience — grand opening</p>

          <div className="flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLaunch}
              aria-label="Launch Website"
              className={`relative z-20 inline-flex items-center gap-4 px-10 py-4 rounded-full bg-gradient-to-r from-gold to-gold-soft text-ink font-semibold text-xl shadow-[0_10px_40px_-10px_rgba(212,175,55,0.8)] ring-4 ring-gold/20`}
            >
              <Sparkles className="w-5 h-5" />
              <span>{isCelebrating ? "Unveiling Elegance…" : "Unveil The Glam"}</span>
            </motion.button>
          </div>

          {/* Celebration text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isCelebrating ? { opacity: 1, scale: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            {isCelebrating && (
              <div className="text-2xl md:text-3xl font-medium text-paper">🎉 Your Salon Website is Live Now! 🎉</div>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* fade-out overlay for transition */}
      {isAnimatingOut && <div className="absolute inset-0 bg-ink/90 backdrop-blur-md transition-opacity" />}
    </motion.div>
  );
}
