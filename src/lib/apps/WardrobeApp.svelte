<script lang="ts">
  import { onMount } from "svelte";
  import { setCanvasSize } from "../../canvasUtil";

  onMount(() => {
    const c = document.getElementById("app-canvas") as HTMLCanvasElement;
    let ctx = c.getContext("2d");

    if (!ctx) {
      console.warn("canvas-ctx in wardrobe-app undefined");
      return;
    }

    setCanvasSize(c);

    // Background
    ctx.fillStyle = "white";
    ctx.strokeStyle = "white";
    ctx.rect(0.5, 0.5, c.width - 1, c.height - 1);
    ctx.fill();
    // -------------

    ctx.save();

    // Wardrobe
    const wdPath = new Path2D();
    ctx.fillStyle = "brown";
    wdPath.rect(5, 5, 90, 144);
    ctx.strokeStyle = "brown";
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

    const el = new Path2D();
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    el.ellipse(42, 30, 2.5, 2.5, 30, 5, 20);
    ctx.stroke(el);
    ctx.fill(el);

    const el2 = new Path2D();
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    el2.ellipse(58, 30, 2.5, 2.5, 30, 5, 20);
    ctx.stroke(el2);
    ctx.fill(el2);

    const el3 = new Path2D();
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    el3.ellipse(58, 85, 2.5, 2.5, 30, 5, 20);
    ctx.stroke(el3);
    ctx.fill(el3);

    const el4 = new Path2D();
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    el4.ellipse(42, 85, 2.5, 2.5, 30, 5, 20);
    ctx.stroke(el4);
    ctx.fill(el4);
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
