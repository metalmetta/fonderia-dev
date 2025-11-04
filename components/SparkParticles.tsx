import { useEffect, useRef } from "react";

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

export const SparkParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const rect = parent.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };
    
    // Initial resize with a slight delay to ensure parent is rendered
    setTimeout(resizeCanvas, 100);
    window.addEventListener("resize", resizeCanvas);

    const sparks: Spark[] = [];
    const maxSparks = 80;

    const createSpark = () => {
      if (canvas.width === 0 || canvas.height === 0) return;
      
      const initialVy = -Math.random() * 8 - 5; // Even higher upward velocity
      sparks.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 20,
        vx: (Math.random() - 0.5) * 2,
        vy: initialVy,
        life: Math.random() * 220 + 180, // Longer lifetime to reach higher
        maxLife: Math.random() * 220 + 180,
        size: Math.random() * 4 + 2,
      });
    };

    const animate = () => {
      if (canvas.width === 0 || canvas.height === 0) {
        requestAnimationFrame(animate);
        return;
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create new sparks
      if (sparks.length < maxSparks && Math.random() < 0.3) {
        createSpark();
      }

      // Update and draw sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const spark = sparks[i];
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.vy += 0.03; // Slight gravity effect
        spark.life--;

        if (spark.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        const opacity = spark.life / spark.maxLife;
        const gradient = ctx.createRadialGradient(spark.x, spark.y, 0, spark.x, spark.y, spark.size * 3);
        gradient.addColorStop(0, `hsla(16, 100%, 65%, ${opacity})`);
        gradient.addColorStop(0.3, `hsla(24, 100%, 55%, ${opacity * 0.8})`);
        gradient.addColorStop(0.6, `hsla(38, 100%, 55%, ${opacity * 0.5})`);
        gradient.addColorStop(1, `hsla(38, 100%, 50%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: "100%", height: "100%", zIndex: 10 }}
      aria-hidden="true"
    />
  );
};
