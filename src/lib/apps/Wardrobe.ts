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
    ctx.beginPath();
    ctx.arc(
      this.pos.x,
      this.pos.y,
      this.radius + this.thickness / 2,
      0,
      Math.PI * 2,
    );

    const res = ctx.isPointInPath(x, y);
    return res;
  }

  hover() {}

  equals(other: PathEl) {
    return this.pos == other.pos;
  }

  clear(ctx: CanvasRenderingContext2D) {
    const { x, y } = this.pos;
  }

  draw(ctx: CanvasRenderingContext2D, hover: boolean = false) {
    const { x, y } = this.pos;

    const prevFillColor = ctx.fillStyle;
    const prevStrokeColor = ctx.strokeStyle;

    ctx.strokeStyle = hover ? "magenta" : this.strokeColor;
    ctx.fillStyle = this.fillColor;

    this.path.arc(x, y, this.radius, 0, Math.PI * 2);

    ctx.lineWidth = this.thickness;
    ctx.stroke(this.path);
    ctx.fill(this.path);

    ctx.strokeStyle = prevStrokeColor;
    ctx.fillStyle = prevFillColor;
  }

  drawSelection(ctx: CanvasRenderingContext2D) {
    const { x, y } = this.pos;

    const prevFillColor = ctx.fillStyle;
    const prevStrokeColor = ctx.strokeStyle;

    ctx.strokeStyle = this.strokeColor;
    ctx.fillStyle = this.fillColor;

    ctx.beginPath();
    const selectedPath = new Path2D();
    selectedPath.arc(x, y, this.radius * 2, 0, Math.PI * 2);
    // this.path.arc(x, y, this.radius * 2, 0, Math.PI * 2);

    ctx.lineWidth = this.thickness;
    ctx.stroke(selectedPath);
    ctx.fill(selectedPath);
    ctx.lineWidth = 2;

    ctx.strokeStyle = prevStrokeColor;
    ctx.fillStyle = prevFillColor;
  }
}

export class WardrobePath extends PathEl {
  draw(ctx: CanvasRenderingContext2D) {
    ctx.lineWidth = 1;

    // Background
    ctx.fillStyle = "white";
    ctx.strokeStyle = "white";

    ctx.rect(0.5, 0.5, ctx.canvas.width - 1, ctx.canvas.height - 1);
    ctx.fill();
    // -------------

    // Wardrobe
    const wdPath = new Path2D();
    ctx.fillStyle = "brown";
    wdPath.rect(5, 5, 90, 144);
    ctx.strokeStyle = "black";
    ctx.stroke(wdPath);
    ctx.fill(wdPath, "nonzero");

    const innerWdPath = new Path2D();

    innerWdPath.rect(50, 5, 2, 144);
    innerWdPath.rect(5, 45, 90, 2);
    ctx.strokeStyle = "#555";
    ctx.fillStyle = "#666";

    ctx.stroke(innerWdPath);
    ctx.fill(innerWdPath, "nonzero");
    // -----------------------------------------
  }

  drawKnobs(ctx: CanvasRenderingContext2D) {
    ctx.restore();
    ctx.lineWidth = 1;

    for (const k of knobs) {
      k.draw(ctx);
      // ctx.stroke(k.el);
    }
  }
}

const k1 = new PathEl(150, 100, 30, 12, "red", "cyan");
const k2 = new PathEl(220, 100, 10, 6, "blue", "yellow");
const k3 = new PathEl(120, 120, 15, 5);

k3.fillColor = "transparent";

export const otherKnobs = [k1, k2, k3];

const c1 = new PathEl(42, 30, 2.5);
const c2 = new PathEl(58, 30, 2.5);
const c3 = new PathEl(58, 85, 2.5);
const c4 = new PathEl(42, 85, 2.5);

export const knobs = [c1, c2, c3, c4, ...otherKnobs];

/*

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

*/
