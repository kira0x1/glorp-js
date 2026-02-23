<script lang="ts">
  import type { GlorpView } from "../types";
  import BrowserTab from "./BrowserTab.svelte";

  let currentView: GlorpView = "Glorp";
</script>

<div class="glorp-browser-nav">
  <BrowserTab tabName="map" />
  <BrowserTab tabName="about" />
</div>

<style>
  .glorp-browser-nav {
    border: 0px inset #888;
    box-sizing: border-box;
    height: 3em;
    display: flex;
  }
</style>
