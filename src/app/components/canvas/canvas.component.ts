import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import p5 from 'p5';

@Component({
  selector: 'app-canvas',
  template: '<div id="p5-container" #p5Container></div>',
  styleUrls: ['./canvas.component.scss'],
  standalone: true,
})
export class P5CanvasComponent implements OnInit, OnDestroy, AfterViewInit {
  private p5Instance!: p5;
  @ViewChild('p5Container', { static: true }) p5Container!: ElementRef;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.p5Instance = new p5(this.sketch, this.p5Container.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.p5Instance) {
      this.p5Instance.remove();
    }
  }

  sketch = (p: p5) => {
    let agents: Agent[] = [];
    let col: any[] = [];
    let fieldIntensity = 10;
    let noiseScale = 500;
    let radius = 300; // 250
    let stepSize = 1;
    let showText = true;
    let a = 0.09;
    let bg = 20;
    let c = 0;

    p.setup = () => {
      const container = this.p5Container.nativeElement;
      const canvas = p.createCanvas(container.clientWidth, container.clientHeight);
      canvas.parent('p5-container');
      p.background(bg);
      canvas.style('display', 'block');
      createStuff();
      initColors(a);
    };

    p.draw = () => {

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
      const step = 13; // 15
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
        this.angulo = p.noise(this.position.x / noiseScale, this.position.y / noiseScale) * fieldIntensity;
        this.position.x += p.cos(this.angulo) * this.stepSize;
        this.position.y += p.sin(this.angulo) * this.stepSize;

        const mouse = p.createVector(p.mouseX, p.mouseY);
        this.aceleracion = p5.Vector.sub(mouse, this.position);
        this.aceleracion.setMag(0.009);

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
      if (p.key === 'r') init();
    };

    p.keyPressed = () => {
      if (p.keyCode === p.UP_ARROW) {
        fieldIntensity *= 2;
        if (fieldIntensity > 3000) fieldIntensity = 3000;
        init();
      }
      if (p.keyCode === p.DOWN_ARROW) {
        fieldIntensity /= 2;
        if (fieldIntensity < 5) fieldIntensity = 5;
        init();
      }
      if (p.keyCode === p.RIGHT_ARROW) {
        noiseScale += 100;
        if (noiseScale > 1000) fieldIntensity = 1000;
        init();
      }
      if (p.keyCode === p.LEFT_ARROW) {
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
      //-----------------------------------
      // col = [
      //   //  p.color(`rgba(255, 0, 0, ${alphaValue})`),
      //   p.color(`rgba(229, 48, 65,${alphaValue})`),
      //   p.color(`rgba(232, 112, 126,${alphaValue})`),
      //   //  p.color(`rgba(0, 255, 255, ${alphaValue})`),
      //   p.color(`rgba(118, 204, 200,${alphaValue})`),
      //   p.color(`rgba(23, 180, 178,${alphaValue})`),
      //   p.color(`rgba(118, 204, 200,${alphaValue})`),
      //   p.color(`rgba(232, 112, 126,${alphaValue})`),
      // ];
      //-----------------------------------
      col = [
        p.color(`rgba(118, 204, 200,${alphaValue})`),
        p.color(`rgba(84,121,128, ${alphaValue}) `),
        p.color(`rgba(69,173,168, ${alphaValue})`),
        p.color(`rgba(157,224,173, ${alphaValue})`),
        p.color(`rgba(118, 204, 200,${alphaValue})`),
        p.color(`rgba(173,216,230,${alphaValue})`),
        //p.color(`rgba(230, 230, 250, ${alphaValue})`), // Lavanda
        //p.color(`rgba(221, 160, 221, ${alphaValue})`), // Ciruela clara Opcional
      ];
      //-----------------------------------
      //   col = [
      //     p.color(`rgba(255, 0, 0, ${alphaValue})`), // rojo
      //     p.color(`rgba(0, 255, 255, ${alphaValue})`), // cian
      //   ];
    }

    p.windowResized = () => {
      const container = this.p5Container.nativeElement;
      p.resizeCanvas(container.offsetWidth, container.offsetHeight);
    };
  };
}
