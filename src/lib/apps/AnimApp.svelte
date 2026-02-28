<script lang="ts">
  import { animate, stagger, text } from "animejs";

  let el = $state<HTMLElement>();

  $effect(() => {
    if (!el) return;

    const { chars } = text.splitText(el, { chars: true });

    animate(chars, {
      delay: stagger(21),
      y: [0, 0],
      x: [90, -40],
      loop: true,
      alternate: true,
      duration: 480,
      loopDelay: 30,
    });
  });
</script>

<div id="app-canvas">
  <div class="anim-text" bind:this={el}>Meow!</div>
</div>

<style>
  #app-canvas {
    width: 100%;
    height: 100%;
  }

  .anim-text {
    padding: 8px;
    padding-left: 60px;
    text-align: left;
  }
</style>
