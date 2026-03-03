<script lang="ts">
  import { getContext, onMount } from "svelte";
  import * as Stage from "stage-js";
  import { InitAtlas } from "../../game";
  import { setCanvasSize } from "../../canvasUtil.js";

  // keep all game state in one object
  const state: { clicked: number } = {
    clicked: 10,
  };

  onMount(async () => {
    let c: HTMLCanvasElement = document.getElementById(
      "app-canvas",
    ) as HTMLCanvasElement;

    await InitAtlas();

    const app = Stage.mount({ canvas: c });

    // Set view box
    app.viewbox(200, 200, "contain");

    // Create a scores component and append it to app
    const x = c.getContext("2d");

    const score = Stage.monotype("example:digit");
    score.spacing(-2.5);
    score.pin("scale", 1.5);
    score.appendTo(app);

    // Align box to center
    score.value(91023299);

    app.show();
  });
</script>

<canvas id="app-canvas"></canvas>

<style>
  #app-canvas {
    width: 100%;
    height: 100%;
  }
</style>
