<script lang="ts">
  import GBrowserNav from "./GBrowserNav.svelte";
</script>

<div class="glorp-browser">
  <GBrowserNav />
  <div class="browser-app"></div>
</div>

<style>
  .glorp-browser {
    margin: auto;
    margin-top: 30px;
    width: 600px;
    height: 400px;
    box-sizing: border-box;
    border: 4px outset #888;
    border-radius: 0px;
    background-color: #777;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .browser-app {
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    box-sizing: border-box;
    border: 5px inset #888;
    background-color: #999;
    box-shadow: inset 0px 0px 18px 2px rgb(107, 107, 107);
  }
</style>
