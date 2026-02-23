<script lang="ts">
  import type { BrowserAppId } from "../types";
  import BrowserTab from "./BrowserTab.svelte";
  let currentView: BrowserAppId = "Glorp";
</script>

<div class="glorp-browser-nav">
  <BrowserTab tabName="map" pageId="Glorp" />
  <BrowserTab tabName="about" pageId="House" />
</div>

<style>
  .glorp-browser-nav {
    border: 0px inset #888;
    box-sizing: border-box;
    height: 3em;
    display: flex;
  }
</style>
