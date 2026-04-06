(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // ─── Config (mirrors insect-animation.tsx defaults) ───────────────────────
  const BEE_VARIANTS = 6;
  const LADYBUG_VARIANTS = 4;

  const BEE_BASE_SIZE = 100;
  const LADYBUG_BASE_SIZE = 55;

  // Default frequencies: bees = 'normal', ladybugs = 'few'
  const BEE_INTERVAL    = { min: 4000,  max: 8000  };
  const LADYBUG_INTERVAL = { min: 8000,  max: 15000 };

  // ─── Overlay container ────────────────────────────────────────────────────
  const container = document.createElement('div');
  container.setAttribute('aria-hidden', 'true');
  container.style.cssText =
    'position:fixed;inset:0;pointer-events:none;z-index:50;overflow:hidden;';
  document.body.appendChild(container);

  let insects = [];
  let nextId = 0;
  let rafId;

  function rand(min, max) { return min + Math.random() * (max - min); }
  function randInt(min, max) { return Math.floor(rand(min, max + 0.999)); }

  // ─── Spawn ────────────────────────────────────────────────────────────────
  function spawn(type) {
    const isBee = type === 'bee';
    const baseSize   = isBee ? BEE_BASE_SIZE    : LADYBUG_BASE_SIZE;
    const sizeMin    = isBee ? 0.3 : 0.4;
    const sizeMax    = isBee ? 1.0 : 0.9;
    const variants   = isBee ? BEE_VARIANTS     : LADYBUG_VARIANTS;
    const folder     = isBee ? 'bees/bee'       : 'ladybugs/ladybug';

    const normalDur  = isBee ? [6000, 14000]    : [4000, 10000];
    const fastDur    = isBee ? [800,  1500]     : [600,  1200];

    const direction  = Math.random() > 0.5 ? 'left' : 'right';
    const variant    = randInt(1, variants);
    const size       = baseSize * rand(sizeMin, sizeMax);
    const isFast     = Math.random() < 0.1;
    const durRange   = isFast ? fastDur : normalDur;
    const duration   = rand(durRange[0], durRange[1]);

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const startY          = rand(60, Math.max(120, vh - 160));
    const wobbleAmplitude = isFast ? 5 : rand(15, 40);
    const wobbleFrequency = rand(2, 5);

    // direction='left'  → sprite faces left, travels L→R (startX=-size → vw)
    // direction='right' → sprite faces right, travels R→L (startX=vw → -size)
    const startX       = direction === 'left' ? -size : vw;
    const totalDistance = vw + size;

    const img = document.createElement('img');
    img.src = `/insects/${folder}-${variant}-${direction}.png`;
    img.draggable = false;
    img.style.cssText =
      `position:absolute;top:0;left:0;width:${size}px;height:${size * 0.97}px;` +
      `will-change:transform;image-rendering:auto;`;
    container.appendChild(img);

    insects.push({
      id: nextId++,
      el: img,
      startX,
      totalDistance,
      direction,
      startY,
      duration,
      wobbleAmplitude,
      wobbleFrequency,
      startTime: null,
    });
  }

  // ─── Animation loop ───────────────────────────────────────────────────────
  function tick(now) {
    insects = insects.filter(function (ins) {
      if (ins.startTime === null) ins.startTime = now;

      const elapsed  = now - ins.startTime;
      const progress = elapsed / ins.duration;

      if (progress >= 1) {
        ins.el.remove();
        return false;
      }

      const x =
        ins.direction === 'left'
          ? ins.startX + ins.totalDistance * progress
          : ins.startX - ins.totalDistance * progress;

      const wobblePhase = progress * ins.wobbleFrequency * Math.PI * 2;
      const y = ins.startY + ins.wobbleAmplitude * Math.sin(wobblePhase);

      ins.el.style.transform = 'translate(' + x + 'px,' + y + 'px)';
      return true;
    });

    rafId = requestAnimationFrame(tick);
  }

  // ─── Spawn scheduling ─────────────────────────────────────────────────────
  function scheduleSpawn(type, interval) {
    setTimeout(function () {
      spawn(type);
      scheduleSpawn(type, interval);
    }, rand(interval.min, interval.max));
  }

  // Staggered initial spawns (matches the app's 2000ms / 3500ms delays)
  setTimeout(function () { spawn('bee'); },     2000);
  setTimeout(function () { spawn('ladybug'); }, 3500);

  // Recurring loops
  scheduleSpawn('bee',     BEE_INTERVAL);
  scheduleSpawn('ladybug', LADYBUG_INTERVAL);

  // Start render loop
  rafId = requestAnimationFrame(tick);

  // Pause when tab is hidden, resume when visible
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      const now = performance.now();
      insects.forEach(function (ins) { ins.pausedAt = now; });
      cancelAnimationFrame(rafId);
    } else {
      const now = performance.now();
      insects = insects.filter(function (ins) {
        // Discard insects that queued up while hidden (never started)
        if (ins.startTime === null) { ins.el.remove(); return false; }
        // Shift startTime forward so in-flight insects don't jump
        ins.startTime += now - ins.pausedAt;
        return true;
      });
      rafId = requestAnimationFrame(tick);
    }
  });
})();
