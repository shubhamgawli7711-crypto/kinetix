import { useEffect, useRef } from "react";
import "../../styles/cursor.css";

interface Point {
  x: number;
  y: number;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  alpha: number;
}

const NODE_COUNT = 120;

const SPRING = 0.24;
const DAMPING = 0.72;

const FOLLOW = 0.85;

const ORB_RADIUS = 4;
const RING_RADIUS = 16;
const MAX_TRAIL_WIDTH = 16;

export default function Cursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

const animationFrame = useRef<number | null>(null);

  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const dpr = useRef(window.devicePixelRatio || 1);

  const pointer = useRef<Point>({
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.5,
  });

  const renderPointer = useRef<Point>({
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.5,
  });

  const velocity = useRef<Point>({
    x: 0,
    y: 0,
  });

  const speed = useRef(0);

  const hoverAmount = useRef(1);

  const ripples = useRef<Ripple[]>([]);

  const hovered = useRef<HTMLElement | null>(null);

  const nodes = useRef<Node[]>(
    Array.from({ length: NODE_COUNT }, () => ({
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.5,
      vx: 0,
      vy: 0,
    }))
  );

  const resizeCanvas = () => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    dpr.current = window.devicePixelRatio || 1;

    canvas.width = window.innerWidth * dpr.current;
    canvas.height = window.innerHeight * dpr.current;

    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr.current, dpr.current);

    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctxRef.current = ctx;
  };

  const createRipple = (x: number, y: number) => {
    ripples.current.push({
      x,
      y,
      radius: 0,
      alpha: 1,
    });
  };

  const updateHover = () => {
    const el = document.elementFromPoint(
      pointer.current.x,
      pointer.current.y
    ) as HTMLElement | null;

    if (!el) {
      hovered.current = null;
      hoverAmount.current += (1 - hoverAmount.current) * 0.15;
      return;
    }

    const magnetic = el.closest(
      "button,a,[data-magnetic],[data-cursor]"
    ) as HTMLElement | null;

    hovered.current = magnetic;

    if (magnetic) {
      hoverAmount.current += (1.6 - hoverAmount.current) * 0.18;

      const rect = magnetic.getBoundingClientRect();

      pointer.current.x +=
        (rect.left + rect.width / 2 - pointer.current.x) * 0.18;

      pointer.current.y +=
        (rect.top + rect.height / 2 - pointer.current.y) * 0.18;
    } else {
      hoverAmount.current += (1 - hoverAmount.current) * 0.15;
    }
  };

  const updatePhysics = () => {
    velocity.current.x +=
      (pointer.current.x - renderPointer.current.x) * 0.18;

    velocity.current.y +=
      (pointer.current.y - renderPointer.current.y) * 0.18;

    velocity.current.x *= 0.78;
    velocity.current.y *= 0.78;

    renderPointer.current.x += velocity.current.x;
    renderPointer.current.y += velocity.current.y;

    speed.current = Math.min(
      45,
      Math.hypot(
        velocity.current.x,
        velocity.current.y
      )
    );

    nodes.current[0].x = renderPointer.current.x;
    nodes.current[0].y = renderPointer.current.y;

    for (let i = 1; i < NODE_COUNT; i++) {
      const prev = nodes.current[i - 1];
      const node = nodes.current[i];

      const dx = prev.x - node.x;
      const dy = prev.y - node.y;

      node.vx += dx * SPRING;
      node.vy += dy * SPRING;

      node.vx *= DAMPING;
      node.vy *= DAMPING;

      node.x += node.vx * FOLLOW;
      node.y += node.vy * FOLLOW;
    }

    for (let i = ripples.current.length - 1; i >= 0; i--) {
      ripples.current[i].radius += 4;
      ripples.current[i].alpha -= 0.03;

      if (ripples.current[i].alpha <= 0) {
        ripples.current.splice(i, 1);
      }
    }
  };
    const drawTrail = () => {
    const ctx = ctxRef.current;

    if (!ctx) return;

    for (let i = nodes.current.length - 2; i >= 0; i--) {
      const a = nodes.current[i];
      const b = nodes.current[i + 1];

      const progress = 1 - i / NODE_COUNT;

      const width =
        (1 - progress) * MAX_TRAIL_WIDTH +
        speed.current * 0.12;

      ctx.beginPath();

      ctx.strokeStyle = `rgba(217,255,0,${
        (1 - progress) * 0.45
      })`;

      ctx.lineWidth = Math.max(0.4, width);

      ctx.shadowColor = "#D9FF00";

      ctx.shadowBlur =
        10 +
        speed.current * 0.7 +
        (1 - progress) * 18;

      ctx.moveTo(a.x, a.y);

      ctx.lineTo(b.x, b.y);

      ctx.stroke();
    }

    ctx.shadowBlur = 0;
  };

  const drawOrb = () => {
    const ctx = ctxRef.current;

    if (!ctx) return;

    ctx.beginPath();

    ctx.fillStyle = "#D9FF00";

    ctx.shadowColor = "#D9FF00";

    ctx.shadowBlur = 18 + speed.current * 1.2;

    ctx.arc(
      renderPointer.current.x,
      renderPointer.current.y,
      ORB_RADIUS + speed.current * 0.02,
      0,
      Math.PI * 2
    );

    ctx.fill();

    ctx.shadowBlur = 0;
  };

  const drawRing = () => {
    const ctx = ctxRef.current;

    if (!ctx) return;

    const angle = Math.atan2(
      velocity.current.y,
      velocity.current.x
    );

    const stretch =
      1 + speed.current * 0.03;

    ctx.save();

    ctx.translate(
      renderPointer.current.x,
      renderPointer.current.y
    );

    ctx.rotate(angle);

    ctx.scale(
      stretch,
      1 / stretch
    );

    ctx.beginPath();

    ctx.strokeStyle = "#D9FF00";

    ctx.lineWidth = 1.2;

    ctx.shadowColor = "#D9FF00";

    ctx.shadowBlur =
      12 +
      speed.current * 0.8;

    ctx.arc(
      0,
      0,
      RING_RADIUS * hoverAmount.current,
      0,
      Math.PI * 2
    );

    ctx.stroke();

    ctx.restore();

    ctx.shadowBlur = 0;
  };

  const drawRipples = () => {
    const ctx = ctxRef.current;

    if (!ctx) return;

    for (const ripple of ripples.current) {
      ctx.beginPath();

      ctx.strokeStyle = `rgba(217,255,0,${ripple.alpha})`;

      ctx.lineWidth = 1.5;

      ctx.shadowColor = "#D9FF00";

      ctx.shadowBlur = 20;

      ctx.arc(
        ripple.x,
        ripple.y,
        ripple.radius,
        0,
        Math.PI * 2
      );

      ctx.stroke();
    }

    ctx.shadowBlur = 0;
  };

  const render = () => {
    const ctx = ctxRef.current;

    if (!ctx) return;

    ctx.clearRect(
      0,
      0,
      window.innerWidth,
      window.innerHeight
    );

    updateHover();

    updatePhysics();

    drawTrail();

    drawRipples();

    drawRing();

    drawOrb();

    animationFrame.current =
      requestAnimationFrame(render);
  };
    useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window
    ) {
      return;
    }

    resizeCanvas();

    const handleMove = (event: PointerEvent) => {
      pointer.current.x = event.clientX;
      pointer.current.y = event.clientY;
    };

    const handleClick = (event: PointerEvent) => {
      createRipple(event.clientX, event.clientY);
    };

    const handleLeave = () => {
      pointer.current.x = -1000;
      pointer.current.y = -1000;
    };

    const handleEnter = () => {
      pointer.current.x = window.innerWidth * 0.5;
      pointer.current.y = window.innerHeight * 0.5;
    };

    window.addEventListener("pointermove", handleMove, {
      passive: true,
    });

    window.addEventListener("pointerdown", handleClick);

    window.addEventListener("resize", resizeCanvas);

    document.addEventListener("mouseleave", handleLeave);

    document.addEventListener("mouseenter", handleEnter);

    animationFrame.current = requestAnimationFrame(render);

    return () => {
      if (animationFrame.current !== null) {
  cancelAnimationFrame(animationFrame.current);
}

      window.removeEventListener(
        "pointermove",
        handleMove
      );

      window.removeEventListener(
        "pointerdown",
        handleClick
      );

      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      document.removeEventListener(
        "mouseleave",
        handleLeave
      );

      document.removeEventListener(
        "mouseenter",
        handleEnter
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="kinetix-cursor"
      aria-hidden="true"
    />
  );
}