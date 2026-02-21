<script lang="ts">
  import Status from "./lib/Status.svelte";
  import icon from "./assets/svelte.svg";
  import glorp_shiny from "./assets/images/glorp_shiny.png";
</script>

<main>
  <div class="header">Glorp</div>
  <div class="status-grid">
    <Status text="meow" img={glorp_shiny} />
    <Status text="meow" img={glorp_shiny} />
    <Status text="meow" img={glorp_shiny} />
    <Status text="meow" img={glorp_shiny} />
  </div>
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
