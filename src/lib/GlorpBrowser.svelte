<script lang="ts">
  import type { GlorpView } from "../types";
  import GBrowserNav from "./GBrowserNav.svelte";

  let currentView: GlorpView = "Glorp";
</script>

<div class="glorp-browser">
  <div>Current View: {currentView}</div>
  <GBrowserNav />
</div>
