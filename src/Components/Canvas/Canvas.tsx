// P5Canvas.tsx
import React, { useEffect, useRef } from "react";
import p5 from "p5";
import "./Canvas.scss";

type P5CanvasProps = {
  className?: string;
  style?: React.CSSProperties;
};

const AUTO_RESET_MS = 60_000;

export const P5Canvas: React.FC<P5CanvasProps> = ({ className, style }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const p5InstanceRef = useRef<p5 | null>(null);

  useEffect(() => {
    console.log("useEffect called");
    if (!containerRef.current) return;

    const containerEl = containerRef.current;

    // Definimos el sketch como closure (igual que en Angular)
    const sketch = (p: p5) => {
      let agents: Agent[] = [];
      let col: any[] = [];
      let fieldIntensity = 10;
      let noiseScale = 500;
      let radius = 300; // 250
      let stepSize = 1.5;
      let showText = true;
      let a = 0.09;
      let bg = 20;
      let c = 0;
      let lastResetAt = 0;

      p.setup = () => {
        console.log("p5 setup called");
        const canvas = p.createCanvas(containerEl.clientWidth, containerEl.clientHeight);
        // En React, lo "parentamos" al div directo
        canvas.parent(containerEl);
        p.background(bg);
        canvas.style("display", "block");
        createStuff();
        initColors(a);
        lastResetAt = p.millis();
      };

      p.draw = () => {
        if (p.millis() - lastResetAt >= AUTO_RESET_MS) {
          lastResetAt = p.millis();
          init();
        }

        for (let i = 0; i < agents.length; i++) {
          agents[i].update();
          agents[i].paint();
        }

        if (p.frameCount % 100 === 0) c++;

        p.noStroke();
        p.fill(255, 200);
        p.textAlign(p.RIGHT);

        if (showText) {
          p.text("Play around with the mouse and the keyboard arrows", p.width - 20, 20);
          p.text("up arrow : fieldIntensity * 2", p.width - 20, 40);
          p.text("down arrow : fieldIntensity / 2", p.width - 20, 60);
          p.text("left arrow : noiseScale - 100", p.width - 20, 80);
          p.text("right arrow : noiseScale + 100", p.width - 20, 100);
          p.text("r : reset with current settings", p.width - 20, 120);
          p.text("current fieldIntensity: " + p.floor(fieldIntensity), p.width - 20, 140);
          p.text("current noiseScale: " + p.floor(noiseScale), p.width - 20, 160);
          showText = false;
        }
      };

      function createStuff() {
        agents = [];
        const step = 15; // 15
        for (let x = p.width / 2 - radius; x < p.width / 2 + radius; x += step) {
          for (let y = p.height / 2 - radius; y < p.height / 2 + radius; y += step) {
            const distance = p.dist(x, y, p.width / 2, p.height / 2);
            if (distance < radius) {
              agents.push(new Agent(p.createVector(x, y)));
            }
          }
        }
      }

      class Agent {
        angulo: number;
        stepSize: number;
        position: p5.Vector;
        outside: boolean;
        velocidad: p5.Vector;
        aceleracion: p5.Vector;

        constructor(position: p5.Vector) {
          this.angulo = p.random(p.TWO_PI);
          this.stepSize = stepSize;
          this.position = position;
          this.outside = false;
          this.velocidad = p.createVector(0, 0);
          this.aceleracion = p.createVector(0, 0);
        }

        update() {
          this.angulo =
            p.noise(this.position.x / noiseScale, this.position.y / noiseScale) * fieldIntensity;

          this.position.x += p.cos(this.angulo) * this.stepSize;
          this.position.y += p.sin(this.angulo) * this.stepSize;

          const mouse = p.createVector(p.mouseX, p.mouseY);
          this.aceleracion = p5.Vector.sub(mouse, this.position);
          this.aceleracion.setMag(0.0009);

          this.velocidad.add(this.aceleracion);
          this.position.add(this.velocidad);
        }

        paint() {
          p.fill(col[c % col.length]);
          p.noStroke();
          p.ellipse(this.position.x, this.position.y, this.stepSize, this.stepSize);
        }
      }

      p.keyTyped = () => {
        if (p.key === "r") init();
      };

      p.keyPressed = () => {
        if (p.key === "ArrowUp") {
          fieldIntensity *= 2;
          if (fieldIntensity > 3000) fieldIntensity = 3000;
          init();
        }
        if (p.key === "ArrowDown") {
          fieldIntensity /= 2;
          if (fieldIntensity < 5) fieldIntensity = 5;
          init();
        }
        if (p.key === "ArrowRight") {
          noiseScale += 100;
          if (noiseScale > 1000) fieldIntensity = 1000;
          init();
        }
        if (p.key === "ArrowLeft") {
          noiseScale -= 100;
          if (noiseScale < 100) fieldIntensity = 100;
          init();
        }
      };

      function init() {
        p.background(bg);
        p.noiseSeed(p.random(9999));
        c = 0;
        showText = true;
        initColors(a);
        createStuff();
      }

      function initColors(alphaValue: number) {
        col = [
          p.color(`rgba(118, 204, 200,${alphaValue})`),
          p.color(`rgba(84,121,128, ${alphaValue}) `),
          p.color(`rgba(69,173,168, ${alphaValue})`),
          p.color(`rgba(157,224,173, ${alphaValue})`),
          p.color(`rgba(118, 204, 200,${alphaValue})`),
          p.color(`rgba(173,216,230,${alphaValue})`),
        ];
      }

      p.windowResized = () => {
        // Cuando el contenedor cambia, ajustamos el canvas
        p.resizeCanvas(containerEl.offsetWidth, containerEl.offsetHeight);
      };
    };

    // Montamos p5
    console.log("Mounting p5 instance");
    p5InstanceRef.current = new p5(sketch, containerEl);

    // Cleanup al desmontar (igual que ngOnDestroy)
    return () => {
      console.log("Unmounting p5 instance");
      p5InstanceRef.current?.remove();
      p5InstanceRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        ...style,
      }}
    />
  );
};
