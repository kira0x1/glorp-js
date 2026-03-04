<script lang="ts">
  import type { BrowserAppId } from "../types";
  import BrowserTab from "./BrowserTab.svelte";

  type propTypes = {
    onTab: (tabId: BrowserAppId) => void;
  };

  const { onTab }: propTypes = $props();
</script>

<div class="glorp-browser-nav">
  <BrowserTab tabName="map" pageId="map" onclick={() => onTab("map")} />
  <BrowserTab tabName="about" pageId="about" onclick={() => onTab("about")} />
  <BrowserTab tabName="anim" pageId="anim" onclick={() => onTab("anim")} />
  <BrowserTab tabName="stage" pageId="stage" onclick={() => onTab("stage")} />
  <BrowserTab
    tabName="wardrobe"
    pageId="wardrobe"
    onclick={() => onTab("wardrobe")}
  />
  <BrowserTab
    tabName="remote"
    pageId="remote"
    onclick={() => onTab("remote")}
  />
</div>

<style>
  .glorp-browser-nav {
    border: 0px inset #888;
    box-sizing: border-box;
    height: 3em;
    display: flex;
  }
</style>
