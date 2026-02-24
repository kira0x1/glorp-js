<script lang="ts">
  import { setContext } from "svelte";
  import type { BrowserAppId } from "../types";
  import BrowserTab from "./BrowserTab.svelte";

  let tabTracker = $state({ tab: "none" });
  setContext("activeTab", tabTracker);

  const onTab = (tabId: BrowserAppId) => {
    tabTracker.tab = tabId;
  };
</script>

<div class="glorp-browser-nav">
  <BrowserTab tabName="map" pageId="map" onTab={() => onTab("map")} />
  <BrowserTab tabName="about" pageId="about" onTab={() => onTab("about")} />
</div>

<style>
  .glorp-browser-nav {
    border: 0px inset #888;
    box-sizing: border-box;
    height: 3em;
    display: flex;
  }
</style>
