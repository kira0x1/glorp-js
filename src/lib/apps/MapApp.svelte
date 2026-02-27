<script lang="ts">
  import { onMount } from "svelte";
  import { setCanvasSize } from "../../canvasUtil";

  onMount(() => {
    let c: HTMLCanvasElement = document.getElementById(
      "app-canvas",
    ) as HTMLCanvasElement;

    let ctx = c.getContext("2d");

    if (!ctx) {
      console.warn("canvas-ctx in mapapp undefined");
      return;
    }

    setCanvasSize(c);

    ctx.fillStyle = "white";
    ctx.strokeStyle = "white";
    ctx.rect(0.5, 0.5, c.width - 1, c.height - 1);
    ctx.fill();

    const path = new Path2D();
    path.moveTo(100, 100);
    path.arcTo(-50, 20, 120, 20, 40);

    ctx.strokeStyle = "blue";
    ctx.stroke(path);
  });
</script>

<canvas id="app-canvas"></canvas>

<style>
  #app-canvas {
    width: 100%;
    height: 100%;
  }
</style>
