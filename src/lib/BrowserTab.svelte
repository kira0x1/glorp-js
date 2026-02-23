<script lang="ts">
  import type { BrowserAppId } from "../types";

  type propTypes = {
    tabName: string;
    pageId: BrowserAppId;
  };

  const { tabName, pageId }: propTypes = $props();

  const onTabClick = () => {
    console.log(`clicked: ${pageId}`);
  };
</script>

<button type="button" class="browser-tab" onclick={onTabClick}>
  <span class="tab-title">{tabName}</span>
</button>

<!-- <div class="browser-tab">
  <span class="tab-title">{tabName}</span>
</div> -->

<style>
  .browser-tab {
    background-color: rgb(84, 153, 118);
    width: 98px;
    border: outset 4px rgb(112, 168, 135);
    margin-bottom: 1px;
    display: flex;
    flex-direction: row;
    font-size: 0.9rem;
    font-weight: 600;
    padding-inline: unset;
    box-sizing: initial;
  }

  .browser-tab:hover {
    cursor: pointer;
    border: 4px inset #8d8d8d;
    background-color: #9e9e9e;
  }

  .tab-title {
    font-family: "Times New Roman", Times, serif;
    color: #eaeaea;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3em;
    margin-left: 8px;
  }
</style>
