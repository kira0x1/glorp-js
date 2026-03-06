<script lang="ts">
  import { setContext } from "svelte";
  import GBrowserNav from "./GBrowserNav.svelte";
  import type { BrowserAppId } from "../types";
  import MapApp from "./apps/MapApp.svelte";
  import AnimApp from "./apps/AnimApp.svelte";
  import WardrobeApp from "./apps/WardrobeApp.svelte";
  import StageApp from "./apps/StageApp.svelte";
  import RemoteApp from "./apps/RemoteApp.svelte";

  let appTracker: { app: BrowserAppId } = $state({ app: "wardrobe" });
  setContext("activeApp", appTracker);

  const onTab = (tabId: BrowserAppId) => {
    appTracker.app = tabId;
  };
</script>

<div class="glorp-browser">
  <GBrowserNav {onTab} />
  <div class="browser-app">
    {#if appTracker.app === "map"}
      <MapApp />
    {:else if appTracker.app === "anim"}
      <AnimApp />
    {:else if appTracker.app === "wardrobe"}
      <WardrobeApp />
    {:else if appTracker.app === "stage"}
      <StageApp />
    {:else if appTracker.app === "remote"}
      <RemoteApp />
    {/if}
  </div>
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
    background-color: #777;
    box-shadow: inset 0px 0px 18px 2px rgb(107, 107, 107);
  }
</style>
