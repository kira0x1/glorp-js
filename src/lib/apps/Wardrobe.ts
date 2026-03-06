interface Vec2 {
  x: number;
  y: number;
}

export class PathEl {
  path;
  pos: Vec2 = { x: 0, y: 0 };
  radius = 2.5;

  //style
  thickness: number = 1;
  strokeColor: string = "black";
  fillColor: string = "white";

  constructor(
    x: number = 0,
    y: number = 0,
    radius: number = 2.5,
    thickness = 1,
    strokeColor = "black",
    fillColor = "white",
  ) {
    this.pos = { x, y };
    this.radius = radius;
    this.path = new Path2D();

    this.fillColor = fillColor;
    this.thickness = thickness;
    this.strokeColor = strokeColor;
  }

  hit(ctx: CanvasRenderingContext2D, x: number, y: number) {
    const prevThickness = ctx.lineWidth;
    ctx.beginPath();
    ctx.lineWidth = this.thickness;
    ctx.arc(
      this.pos.x,
      this.pos.y,
      this.radius + this.thickness / 2,
      0,
      Math.PI * 2,
    );

    const res = ctx.isPointInPath(x, y);
    ctx.lineWidth = prevThickness;
    return res;
  }
  draw() {
    const { x, y } = this.pos;
    this.path.arc(x, y, this.radius, 0, Math.PI * 2);
  }
}

const k1 = new PathEl(150, 100, 30, 12, "red", "cyan");
const k2 = new PathEl(220, 100, 10, 6, "blue", "yellow");
const k3 = new PathEl(120, 120, 15, 5);
k3.fillColor = "transparent";

export const otherKnobs = [k1, k2, k3];

export const knobs = [
  {
    el: new Path2D(),
    pos: {
      x: 42,
      y: 30,
      r: 2.5,
    },
    draw() {
      this.el.arc(this.pos.x, this.pos.y, this.pos.r, 0, Math.PI * 2);
    },
    hit(ctx: CanvasRenderingContext2D, x: number, y: number) {
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, 3, 0, Math.PI * 2);
      return ctx.isPointInPath(x, y);
    },
  },
  {
    el: new Path2D(),
    pos: {
      x: 58,
      y: 30,
      r: 2.5,
    },
    draw() {
      this.el.arc(this.pos.x, this.pos.y, this.pos.r, 0, Math.PI * 2);
    },
    hit(ctx: CanvasRenderingContext2D, x: number, y: number) {
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.pos.r, 0, Math.PI * 2);
      return ctx.isPointInPath(x, y);
    },
  },
  {
    el: new Path2D(),
    pos: {
      x: 58,
      y: 85,
      r: 2.5,
    },
    draw() {
      this.el.arc(this.pos.x, this.pos.y, this.pos.r, 0, Math.PI * 2);
    },
    hit(ctx: CanvasRenderingContext2D, x: number, y: number) {
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, 3, 0, Math.PI * 2);
      return ctx.isPointInPath(x, y);
    },
  },
  {
    el: new Path2D(),
    pos: {
      x: 42,
      y: 85,
      r: 2.5,
    },
    draw() {
      this.el.arc(this.pos.x, this.pos.y, this.pos.r, 0, Math.PI * 2);
    },
    hit(ctx: CanvasRenderingContext2D, x: number, y: number) {
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.pos.r, 0, Math.PI * 2);
      return ctx.isPointInPath(x, y);
    },
  },
];
