<script lang="ts">
  import Status from "./lib/Status.svelte";
  import glorp_shiny from "./assets/images/glorp_shiny.png";
  import GlorpBrowser from "./lib/GlorpBrowser.svelte";
</script>

<head>
  <link rel="icon" type="image/png" href="src/assets/images/glorp_shiny.png" />
</head>

<main>
  <div class="header">Glorp</div>
  <div class="status-grid">
    <Status text="meow" img={glorp_shiny} />
    <Status text="meow" img={glorp_shiny} />
    <Status text="meow" img={glorp_shiny} />
    <Status text="meow" img={glorp_shiny} />
  </div>

  <GlorpBrowser />
</main>

<style>
  .status-grid {
    gap: 10px;
    margin: 1em auto;
    width: 42vw;
    display: flex;
    flex-wrap: wrap;
  }
</style>
