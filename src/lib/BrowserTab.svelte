<script lang="ts">
  import { getContext } from "svelte";
  import type { BrowserAppId } from "../types";
  import type { MouseEventHandler } from "svelte/elements";

  type propTypes = {
    tabName: string;
    pageId: BrowserAppId;
    onTab: MouseEventHandler<HTMLButtonElement>;
  };

  // Props
  const { tabName, pageId, onTab }: propTypes = $props();

  const tabContext: any = getContext("activeTab");

  const isActive = () => {
    return `browser-tab ${tabContext.tab == pageId ? "active" : ""}`;
  };
</script>

<button type="button" class={isActive()} onclick={onTab}>
  <span class="tab-title">{tabName}</span>
</button>

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

    &:hover:not(.active) {
      cursor: pointer;
      background-color: rgb(86, 155, 120);
      border: 4px outset rgb(125, 196, 154);
    }
  }

  .active {
    background-color: rgb(77, 145, 111);
    border: 4px inset rgb(104, 173, 133);

    &:hover {
      cursor: pointer;
      border: 4px inset rgb(99, 163, 125);
    }

    .tab-title {
      color: #c4eec8;
    }
  }

  .tab-title {
    color: #eaeaea;
    font-size: 17px;
    font-weight: 400;
    line-height: 1.3em;
    margin-left: 8px;
  }
</style>
