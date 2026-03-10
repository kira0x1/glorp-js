<script lang="ts">
  import { onMount } from "svelte";
  import { Application, Assets, Sprite, Container } from "pixi.js";
  import bunnyImg from "../../assets/images/bunny.png";

  // Create a new application
  const app = new Application();

  onMount(async () => {
    (async () => {
      const pixiWindow = document.getElementById("pixi-container");

      // Initialize the application
      await app.init({
        background: "#1099bb",
        resizeTo: pixiWindow as HTMLElement,
      });

      // Append the application canvas to the document body
      pixiWindow!.appendChild(app.canvas);

      const container = new Container();
      app.stage.addChild(container);

      // Load the bunny texture
      const texture = await Assets.load(bunnyImg);

      // Create a bunny Sprite
      const bunny = new Sprite(texture);

      // Center the sprite's anchor point
      bunny.anchor.set(0.5);

      // Move the sprite to the center of the screen
      bunny.position.set(app.screen.width / 2, app.screen.height / 2);

      // Add the bunny to the stage
      app.stage.addChild(bunny);

      for (let i = 0; i < 4; i++) {
        const bunny = new Sprite(texture);

        bunny.x = (i % 2) * 40;
        bunny.y = Math.floor(i / 2) * 45;
        container.addChild(bunny);
      }

      container.x = 20;
      container.y = 20;

      // Listen for animate update
      app.ticker.add((time) => {
        // Just for fun, let's rotate mr rabbit a little.
        // * Delta is 1 if running at 100% performance *
        // * Creates frame-independent transformation *
        bunny.rotation += 0.1 * time.deltaTime;
      });
    })();
  });
</script>

<div id="pixi-container"></div>

<style>
  #pixi-container {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    border: 0;
  }
</style>
