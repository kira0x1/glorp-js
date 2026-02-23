<script lang="ts">
  let { tabName } = $props();
</script>

<div class="browser-tab">
  <span class="tab-title">{tabName}</span>
</div>

<style>
  .browser-tab {
    background-color: rgb(84, 153, 118);
    width: 98px;
    border: outset 4px rgb(112, 168, 135);
    margin-bottom: 1px;
    display: flex;
    flex-direction: row;
  }

  .browser-tab:hover {
    border: 4px inset #8d8d8d;
    background-color: #9e9e9e;
  }

  .tab-title {
    color: #dbdbdb;
    font-size: 1.1em;
    font-weight: 500;
    line-height: 1.5em;
    margin-left: 10px;
  }
</style>
