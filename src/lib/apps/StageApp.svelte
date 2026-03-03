<script lang="ts">
  import { onMount } from "svelte";
  import { initAtlas, mountStage } from "../../game";

  // keep all game state in one object
  const state: { clicked: number } = {
    clicked: 10,
  };

  onMount(async () => {
    let c: HTMLCanvasElement = document.getElementById(
      "app-canvas",
    ) as HTMLCanvasElement;

    await initAtlas();

    const app = mountStage(c);
  });
</script>

<canvas id="app-canvas"></canvas>

<style>
  #app-canvas {
    width: 100%;
    height: 100%;
  }
</style>
