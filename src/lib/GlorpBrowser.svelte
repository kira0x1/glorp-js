<script lang="ts">
  import type { GlorpView } from "../types";
  import GBrowserNav from "./GBrowserNav.svelte";

  let currentView: GlorpView = "Glorp";
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
    border: 4px inset #888;
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    box-sizing: border-box;
  }
</style>
