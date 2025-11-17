import confetti from 'canvas-confetti';

export const useFireConfetti = () => {
  const triggerFireConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 9999,
      disableForReducedMotion: true,
    };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    // Fire colors - ember oranges, yellows, reds
    const fireColors = ['#FF6B00', '#FF8C00', '#FFA500', '#FFB800', '#FFCC00', '#FF4500', '#FF5733'];

    const interval: NodeJS.Timeout = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 3;

      // Fire embers from bottom left
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: fireColors,
        shapes: ['circle'],
        scalar: randomInRange(0.4, 1),
        gravity: randomInRange(-0.8, -0.4),
        drift: randomInRange(-0.4, 0.4),
      });

      // Fire embers from bottom right
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: fireColors,
        shapes: ['circle'],
        scalar: randomInRange(0.4, 1),
        gravity: randomInRange(-0.8, -0.4),
        drift: randomInRange(-0.4, 0.4),
      });

      // Central fire burst
      confetti({
        ...defaults,
        particleCount: 2,
        origin: { x: randomInRange(0.4, 0.6), y: Math.random() - 0.2 },
        colors: fireColors,
        shapes: ['circle'],
        scalar: randomInRange(0.6, 1.2),
        gravity: randomInRange(-1, -0.5),
        drift: randomInRange(-0.3, 0.3),
      });
    }, 250);

    // Initial big burst
    confetti({
      particleCount: 100,
      spread: 180,
      origin: { y: 0.6 },
      colors: fireColors,
      shapes: ['circle'],
      scalar: randomInRange(0.5, 1.5),
      gravity: -0.6,
      ticks: 200,
      zIndex: 9999,
      disableForReducedMotion: true,
    });
  };

  return { triggerFireConfetti };
};

