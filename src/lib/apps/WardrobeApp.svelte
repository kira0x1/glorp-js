<script lang="ts">
  import { knobs, otherKnobs } from "./Wardrobe";
  import { onMount } from "svelte";
  import { setCanvasSize } from "../../canvasUtil";

  onMount(() => {
    const canvas = document.getElementById("app-canvas") as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");

    if (!ctx) {
      console.warn("canvas-ctx in wardrobe-app undefined");
      return;
    }

    setCanvasSize(canvas);

    // Background
    ctx.fillStyle = "white";
    ctx.strokeStyle = "white";

    ctx.save();

    ctx.rect(0.5, 0.5, canvas.width - 1, canvas.height - 1);
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

    ctx.restore();

    // #region knobs

    for (const e of knobs) {
      e.draw();
      ctx.stroke(e.el);
      ctx.fill(e.el);
    }

    ctx.save();

    for (const e of otherKnobs) {
      ctx.strokeStyle = e.strokeColor;
      ctx.fillStyle = e.fillColor;

      e.draw();
      ctx.lineWidth = e.thickness;
      ctx.stroke(e.path);
      ctx.fill(e.path);
    }

    ctx.restore();

    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      canvas.style.cursor = ctx.isPointInPath(x, y) ? "pointer" : "default";

      let hit = false;
      ctx.strokeStyle = "black";

      knobs.forEach((c) => {
        if (c.hit(ctx, x, y)) {
          ctx.strokeStyle = "magenta";
          ctx.stroke(c.el);
          ctx.fill(c.el);
          hit = true;
        } else {
          ctx.strokeStyle = "black";
          ctx.stroke(c.el);
          ctx.fill(c.el);
        }
      });

      canvas.style.cursor = hit ? "pointer" : "default";
    });

    canvas.addEventListener("click", (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const knobHit = knobs.find((c) => c.hit(ctx, x, y));
      if (knobHit) {
        console.dir(`knob hit: `, knobHit.pos);
      } else {
        console.log(`no knob hit`);
      }
    });

    // #endregion
  });
</script>

<canvas id="app-canvas">
  <div class="text">wardrobe</div>
  <div class="wardrobe"></div>
</canvas>

<style>
  #app-canvas {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  .text {
    font-family: "Courier New", Courier, monospace;
  }

  .wardrobe {
    box-sizing: border-box;
    border: 2px solid black;
    width: 30%;
    height: 90%;
  }
</style>
