<script lang="ts">
  import { knobs, otherKnobs, PathEl, WardrobePath } from "./Wardrobe";
  import { onMount } from "svelte";
  import { setCanvasSize } from "../../canvasUtil";

  const selectionState: {
    selection?: PathEl;
    hasSelection: boolean;
    prevSelection?: PathEl;
  } = $state({
    selection: undefined,
    prevSelection: undefined,
    hasSelection: false,
  });

  const wd = new WardrobePath();

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

  $effect(() => {
    if (selectionState.hasSelection) {
      if (selectionState.prevSelection) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        wd.draw(ctx);
        wd.drawKnobs(ctx);
      }

      selectionState.selection?.drawSelection(ctx);
    } else {
      if (selectionState.prevSelection) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        wd.draw(ctx);
        wd.drawKnobs(ctx);
      }
    }
  });

  onMount(() => {
    canvas = document.getElementById("app-canvas") as HTMLCanvasElement;
    let tempCtx = canvas.getContext("2d");

    if (!tempCtx) {
      console.warn("canvas-ctx in wardrobe-app undefined");
      return;
    }

    ctx = tempCtx;

    setCanvasSize(canvas);

    wd.draw(ctx);

    // #region knobs

    for (const e of knobs) {
      e.draw(ctx);
      // ctx.stroke(e.el);
      // ctx.fill(e.el);
    }

    ctx.save();

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
          // ctx.strokeStyle = "magenta";
          // ctx.stroke(c.el);
          // ctx.fill(c.el);
          hit = true;
        } else {
          // ctx.strokeStyle = "black";
          // ctx.stroke(c.el);
          // ctx.fill(c.el);
        }
      });

      canvas.style.cursor = hit ? "pointer" : "default";
    });

    canvas.addEventListener("click", (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // const knobHit = knobs.find((c) => c.hit(ctx, x, y));

      const knobHit = otherKnobs.find((c) => c.hit(ctx, x, y));

      if (knobHit) {
        if (selectionState.hasSelection) {
          selectionState.prevSelection = selectionState.selection;
        }

        selectionState.selection = knobHit;
        selectionState.hasSelection = true;

        console.dir(`knob hit: `, knobHit.pos);
      } else {
        if (selectionState.hasSelection) {
          selectionState.prevSelection = selectionState.selection;
        }
        selectionState.hasSelection = false;
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
